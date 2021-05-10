import { Publisher, Subjects, TicketCreatedEvent } from '@ticketing_jr/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
