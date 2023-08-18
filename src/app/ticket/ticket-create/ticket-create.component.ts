import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup = new FormGroup({
    flightNumber: new FormControl<string>({
      value: '',
      disabled: false,
    }, {
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Za-z]{2}[0-9]{4}$/),
      ],
    }),
    seat: new FormControl<string>({
      value: '',
      disabled: false,
    }, {
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Za-z][0-9]$/),
      ],
    }),
    service: new FormControl<string>({
      value: '',
      disabled: false,
    }),
    checked: new FormControl<boolean>({
      value: false,
      disabled: false,
    }),
  });

  isValid(name: string): boolean {
    return this.form.controls[name]?.invalid
      && this.form.controls[name]?.dirty;
  }

}
