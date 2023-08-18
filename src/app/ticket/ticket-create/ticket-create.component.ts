import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent {

  ticketService = inject(TicketService);

  ticket = new Ticket();

  form: FormGroup = new FormGroup({});

}
