# Angular-basic-2023-form-reactive
Reactive Angular Forms

## Lesson-01
- Explaining the course.
- [Reactive forms](https://angular.io/guide/reactive-forms)

## Lesson-02
- `ng g c ticket/ticket-create --module ticket.module`
- [TicketRoutingModule](src\app\ticket\ticket-routing.module.ts)
- Add ReactiveFormsModule:
- [TicketModule](src\app\ticket\ticket.module.ts)
- [TicketCreateComponent](src\app\ticket\ticket-create\ticket-create.component.ts)
- [TicketCreateComponent HTML](src\app\ticket\ticket-create\ticket-create.component.html)

## Lesson-03
- [TicketsComponent](src\app\ticket\tickets\tickets.component.html)
- [TicketCreateComponent](src\app\ticket\ticket-create\ticket-create.component.ts)
- [TicketCreateComponent HTML](src\app\ticket\ticket-create\ticket-create.component.html)
- [TicketCreateComponent SCSS](src\app\ticket\ticket-create\ticket-create.component.scss)

## Lesson-04


form: FormGroup = new FormGroup({
    flightNumber: new FormControl<string>({
      value: '',
      disabled: false,
    }),
    seat: new FormControl<string>({
      value: '',
      disabled: false,
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
