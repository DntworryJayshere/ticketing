import {
	Subjects,
	Publisher,
	ExpirationCompleteEvent,
} from '@ticketing_jr/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
