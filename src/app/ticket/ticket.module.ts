import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketsComponent } from './tickets/tickets.component';
import { SharedModule } from '../shared.module';
import { TicketEditorComponent } from './ticket-editor/ticket-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TicketsComponent,
    TicketEditorComponent,
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class TicketModule { }
