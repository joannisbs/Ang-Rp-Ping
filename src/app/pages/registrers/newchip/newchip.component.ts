import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ChipService } from '../../../services/chip/chip.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-newchip',
  templateUrl: './newchip.component.html',
  styleUrls: ['./newchip.component.css']
})



export class NewchipComponent implements OnInit , OnDestroy {

  // declaração do formulário
  public formulario: FormGroup;
  // Flag de verificação se ocorreu submit, utilizado para mostrar os erros.
  public ocorreuSubmit = false;

  // variaveis de inserção e controle do formArray.
  public chips;
  public ctl_lixo = 0;
  public index = 0;

  public showModal = false;
  public listaFalhas = [];
  public OcorreuFalhas = false;
  private subcription: Subscription;


  // Declaração do construtor.
  constructor(
    private formBuilder: FormBuilder,
    private chipService: ChipService,
  ) { }





  // Declaração das vaiaveis recebidas pelos inputs.
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      chips: this.formBuilder.array([this.createItem()]),
    });
  }


  ColocaOperadora(i) {
    this.chips = this.formulario.get('chips') as FormArray;
    const valor = this.chips.at(i).get('chip_ip').value;
      
    console.log(valor);
    let op = '';
    if (valor.slice(0,2)==='10') {

      if (valor.slice(2,5)==='.26') {
        op = 'Vivo';
      }else if (valor.slice(2,5)==='.50') {
        op = 'Oi';
      }else if(valor.slice(2,6)==='.115') {
        op = 'Porto';
      }
    }else if (valor.slice(0,6)==='172.40'){
      op = 'Claro';
    }else if (valor.slice(0,4)==='host'){
      op = '4G';
    }else {op = 'INVALID'}
    this.chips.at(i).get('chip_Operadora').patchValue(op);
    
  }

  // Methodos executados no HTML

  // Methodos relacionados ao form array


  // Cria o array do controle dos inputs.
  formarray () {
    const formstring =  this.formulario.get('chips')as FormArray;
    return formstring;
  }


  // Adciona chip
  addChip(): void {
    // Contagem do chip
    this.index ++;
    // Move para o final da página.
    scrollTo(0, 100000);

    // Insere um novo Chip.
    this.chips = this.formulario.get('chips') as FormArray;
    // Cria o controle deste novo chip.
    this.chips.push(this.createItem());
    // preenche a data do primeiro chip para os demais.
    this.preencheData ();
 }

  // Methodo de remover chip.
  removeChip(chip) {
    this.chips = this.formulario.get('chips') as FormArray;
    this.chips.removeAt(chip);
    this.index --;
  }

  // Methodo  que preenche a data em todos os chips.
  preencheData () {
    if (this.index > 0) {
      this.chips = this.formulario.get('chips') as FormArray;
      const tamanho = this.chips.length;
      const valor =  this.chips.at(0).get('chip_Data').value;
      for (let i = 0; i < tamanho; i++) {
        this.chips.at(i).get('chip_Data').patchValue(valor);
      }
    }
  }

  // Methodo que retorna o controle de um novo chip.
  createItem(): FormGroup {
    return this.formBuilder.group({

      chip_Numchip: ['',
        [
          Validators.required,
          Validators.maxLength(45),
          Validators.minLength(8),
          Validators.pattern(/[0-9]{8}/ig)
        ]
      ],

      chip_ip: ['',
        [
          Validators.required,
          Validators.maxLength(45),
          // tslint:disable-next-line:max-line-length
          Validators.pattern(/(^((10\.26\.)|(172\.40\.)|(10\.50\.)|(10\.115\.)).)|(^host$)/)
        ]
      ],

      chip_Operadora: ['', [Validators.required]],

      chip_Data: ['', [Validators.required]],
    });
  }

  // Mostra em qual campo contém erro.
  showErrorsFormArray(value, index) {
    const chips = this.formulario.get('chips') as FormArray;
    // mesmo methodo utilizado para verificação de todos os campos aplicado ao form array.
    return chips.at(index).get(value).valid || !(chips.at(index).get(value).touched || this.ocorreuSubmit);
  }

  // Controle da lixeira abrindo.
  lixo(i) {
    this.ctl_lixo = i;
  }

  ClearForm() {
    this.formulario.reset();
    this.showModal = false;
  }

  // Methodos relacionados ao Submit
  VerificaSeSalvouTudo(res){
    this.listaFalhas = []
    // # 1 Chip Existente
    // # 2 Conflito de Ip
    // # 3 dados Inconsistentes
    for (let i=0; i < res.length; i++) 
    {
      if (res[i][0]=== false)
      {
        let motivo='';
        if (res[i][1]==1)
        {
          motivo = 'Chip já cadastrado';
        }else if (res[i][1]==2)
        {
          motivo = 'Conflito de ip com outro chip';
        }else if (res[i][1]==3)
        {
          motivo = 'Os dados foram inconsistentes';
        }
          this.listaFalhas.push([res[i][2],motivo]);
          this.OcorreuFalhas = true;

      }
    }
    this.showModal = true;
      console.log(this.listaFalhas);
  }
  onSubmit(chips, valido) {
    console.log(chips);

    if (valido) {
      console.log('Valido');
      this.ocorreuSubmit = false;
      this.subcription = this.chipService
      .cadastrarChip(chips)
      .subscribe(res => {
        this.VerificaSeSalvouTudo(res);
        
      }
      );
    } else {
      this.ocorreuSubmit = true;
    }
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
}


