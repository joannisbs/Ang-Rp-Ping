import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RepService } from 'src/app/services/Repservice/rep.service';
import { ValidadeResponsesService } from 'src/app/services/validade_responses/validade-responses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newequip',
  templateUrl: './newequip.component.html',
  styleUrls: ['./newequip.component.css']
})
export class NewequipComponent implements OnInit {

  public formulario: FormGroup;
  public showimg = false;
  private subcription: Subscription;
  constructor(private formBuilder: FormBuilder,
    private repService: RepService,
    private validate: ValidadeResponsesService,) { }
  public imagebutton = ['/assets/icons/xred.png', '/assets/icons/xred.png', '/assets/icons/xred.png', '/assets/icons/xred.png'];

  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      
    reps_marca: ['',
    [Validators.required,
    Validators.maxLength(12),
    Validators.pattern('[A-Z].*')]],
reps_modelo: ['',
    [Validators.required,
    Validators.maxLength(12),
    Validators.pattern('[A-Z].*')]],

reps_CheckAzul: [''],

reps_CheckVerde: [''],

reps_CheckBranco: [''],

reps_CheckVermelho: [''],
    });
  }
  onSubmit() {
    console.log(this.formulario.value);
    

      // caso Válido realisar metodo de envio
      if (true) {

          this.repService
          .newequip(this.formulario.value)
          .subscribe(respose => {
            const Secionsucess = this.validate.ValidateSeccion(respose[0]);
            if (Secionsucess){
              const postSucess = this.validate.ValidateAction(respose[1]);
              if (postSucess == 1){
 
                alert("A empresa foi salva com sucesso!");
                this.subcription.unsubscribe();
              }else if (postSucess == 2){
                
                alert("A empresa já existe no banco de dados.")
              }
            }
           
          }
          );
        }
  
  
  
      } 
  
  
  }
  hideImage() {
    this.showimg = false;
  }
  
  showImage(value, number) {
      if (value) {
        this.imagebutton[number] = '/assets/icons/certoverde.png';
      } else {
        this.imagebutton[number] = '/assets/icons/xred.png';
      }
    }
}
