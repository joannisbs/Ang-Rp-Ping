import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-newchip',
  templateUrl: './newchip.component.html',
  styleUrls: ['./newchip.component.css']
})



export class NewchipComponent implements OnInit {

  // declaração do formulário
  public formulario: FormGroup;
  // Flag de verificação se ocorreu submit, utilizado para mostrar os erros.
  public ocorreuSubmit = false;

  // variaveis de inserção e controle do formArray.
  public chips;
  public ctl_lixo = 0;
  public index = 0;




  // Declaração do construtor.
  constructor(private formBuilder: FormBuilder) { }





  // Declaração das vaiaveis recebidas pelos inputs.
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      chips: this.formBuilder.array([this.createItem()]),
    });
  }




  // Methodos executados no HTML

  // Methodos relacionados ao form array


  // Cria o array do controle dos inputs.
  formarray () {
    return this.formulario.get('chips').controls;
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
              
        ]
      ],
      chip_Operadora: ['',
        [Validators.required,
        Validators.maxLength(45)]],
      chip_Data: ['',
      [Validators.required,
        Validators.maxLength(45)]],
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



  // Methodos relacionados ao Submit

  onSubmit(valor, valido) {
    console.log(valor);
    this.ocorreuSubmit = true;
    if (valido) {
      console.log('Valido');
    }
  }
}


