import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  /*
  id?: number = 0;
  flightNumber: string = '';
  seat: string = '';
  service: 'tourist' | 'business' | 'economy' = 'economy';
  checked: boolean = false;
  */

  form: FormGroup = new FormGroup({
    flightNumber: new FormControl<string>(''),
    seat: new FormControl<string>(''),
    service: new FormControl<string>(''),
    checked: new FormControl<boolean>(false),
  });

}
