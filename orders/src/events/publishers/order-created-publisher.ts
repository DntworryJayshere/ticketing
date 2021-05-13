import { Publisher, OrderCreatedEvent, Subjects } from '@ticketing_jr/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
