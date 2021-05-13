import { Subjects, Publisher, OrderCancelledEvent } from '@ticketing_jr/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
