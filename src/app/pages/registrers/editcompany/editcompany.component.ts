import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})


export class EditcompanyComponent implements OnInit {

  public spanerror = '<span class=\'input-group-addon\'><img src=\'/assets/icons/xred.png\' alt=\'ERRO\' class=\'erroicon\'></span>';

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) {
    console.log(form);
    // if (input_name.valid) {
    //   this.spanerror = '(<span class=\'input-group-addon\'><img src=\'/assets/icons/xred.png\' alt=\'ERRO\' class=\'erroicon\'></span>)';
    // }
  }



}
