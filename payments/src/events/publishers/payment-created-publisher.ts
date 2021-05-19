import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketing_jr/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
