import { CommonMapper } from "@clement.pasteau/shared";

export class AccountMapper implements CommonMapper<unknown, unknown> {
  toDomain(_model: unknown): unknown {
    throw new Error("Method not implemented.");
  }
  toPersistence(_domain: unknown): unknown {
    throw new Error("Method not implemented.");
  }
}
