import { Publisher, TicketCreatedEvent, Subjects } from '@ticketing_jr/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	readonly subject = Subjects.TicketCreated;
}
