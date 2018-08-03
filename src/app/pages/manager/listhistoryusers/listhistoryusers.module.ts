import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListhistoryusersComponent } from './listhistoryusers.component';
import { routingListhitoryusers } from 'src/app/pages/manager/listhistoryusers/listhistoryusers.routing';
import { GerarPDFComponent } from './gerarPDF/gerar-pdf/gerar-pdf.component';

@NgModule({
  imports: [
    CommonModule,
    routingListhitoryusers
  ],
  declarations: [ListhistoryusersComponent, GerarPDFComponent]
})
export class ListhistoryusersModule { }
