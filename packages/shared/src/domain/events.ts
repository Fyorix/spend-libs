import { EventTag } from './event-tag.enum.js';

export enum AccountEventAccountType {
  TRANSACTION_CREATED = 'TRANSACTION_CREATED',
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
}

export interface TransactionCreatedPayload {
  transactionId: string;
  address: string;
  amount: number;
  userId: string;
  tag: EventTag;
}

export interface RedisEvent<T = unknown> {
  type: string;
  payload: T;
}

export interface TransactionCreatedEvent extends RedisEvent<TransactionCreatedPayload> {
  type: AccountEventAccountType.TRANSACTION_CREATED;
}
