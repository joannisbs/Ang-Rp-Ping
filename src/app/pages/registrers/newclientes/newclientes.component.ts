import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserComumFormGroup } from '../components/user-comum-form/user-comum.interface';

@Component({
  selector: 'app-newclientes',
  templateUrl: './newclientes.component.html',
  styleUrls: ['./newclientes.component.css']
})
export class NewclientesComponent implements OnInit {


  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
  public forsub = false;

  constructor(
    private formBuilder: FormBuilder,
    // private companyService: CompanyService,
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group ({
      ...UserComumFormGroup,


    });

  }
  showImage(value) {
    this.showimg = true;
    if (value) {
      this.imagebutton = '/assets/icons/certoverde.png';
    } else {
      this.imagebutton = '/assets/icons/xred.png';
    }
  }
  hideImage() {
    this.showimg = false;
  }

}
