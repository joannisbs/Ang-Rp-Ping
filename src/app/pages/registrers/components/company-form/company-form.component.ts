import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  @Input()
  companyForm;

  constructor() { }

  ngOnInit() {
  }

}
