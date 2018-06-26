import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { companyFormGroup } from '../components/company-form/company.interface';
import { addressFormGroup } from '../components/address-form/address.interface';

import { CompanyService } from './../../../services/company/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})


export class EditcompanyComponent implements OnInit {

  public formulario: FormGroup;
  public imagebutton = '/assets/icons/xred.png';
  public showimg = false;
  public forsub = false;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
  ) { }


  ngOnInit() {
    this.formulario = this.formBuilder.group ({

        ...companyFormGroup,
        ...addressFormGroup,

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
  onSubmit(company, valido) {
    if (valido) {
      console.log(company);

      this.companyService
      .cadastrarCompany(company)
      .subscribe(res => console.log(res));

    }
  }

}
