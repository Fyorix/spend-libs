import { EventTag } from './event-tag.enum.js';

export enum AccountEventAccountType {
  TRANSACTION_CREATED = 'TRANSACTION_CREATED',
  ACCOUNT_CREATED = 'ACCOUNT_CREATED',
}

export enum MapEventType {
  TRANSACTION_PINGED = 'TRANSACTION_PINGED',
  ZONE_UPDATED = 'ZONE_UPDATED',
}

export enum MapMode {
  INDIVIDUAL = 'INDIVIDUAL',
  WEIGHTED = 'WEIGHTED',
}

export interface TransactionCreatedPayload {
  transactionId: string;
  address: string;
  amount: number;
  userId: string;
  tag: EventTag;
}

export interface ZoneUpdatedPayload {
  id: string;
  latitude: number;
  longitude: number;
  weight: number;
  radius: number;
  tag?: string;
}

export interface GetMapZonesResponse {
  zones: ZoneUpdatedPayload[];
}

export interface TransactionPingedPayload {
  transactionId: string;
  userId: string;
  latitude: number;
  longitude: number;
  amount: number;
  tag: EventTag;
}

export interface RedisEvent<T = unknown> {
  type: string;
  payload: T;
}

export interface TransactionCreatedEvent extends RedisEvent<TransactionCreatedPayload> {
  type: AccountEventAccountType.TRANSACTION_CREATED;
}

export interface ZoneUpdatedEvent extends RedisEvent<ZoneUpdatedPayload> {
  type: MapEventType.ZONE_UPDATED;
}

export interface TransactionPingedEvent extends RedisEvent<TransactionPingedPayload> {
  type: MapEventType.TRANSACTION_PINGED;
}
