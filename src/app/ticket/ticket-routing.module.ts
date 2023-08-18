import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketEditorComponent } from './ticket-editor/ticket-editor.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'edit/:id', component: TicketEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
