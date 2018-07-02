import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-comum-form',
  templateUrl: './user-comum-form.component.html',
  styleUrls: ['./user-comum-form.component.css']
})
export class UserComumFormComponent implements OnInit {

  @Input()
  userComumForm;

  @Input()
  ocorreuSubmit;


  constructor() { }

  ngOnInit() { }

  showErrors(value) {
    return this.userComumForm.controls[ value ].valid || !(this.userComumForm.controls[ value].touched || this.ocorreuSubmit);
  }
}
