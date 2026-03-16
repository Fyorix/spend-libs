import { CommonMapper } from "../../../../shared/src/infra/mappers/common.mapper.js";

export class AccountMapper implements CommonMapper<unknown, unknown> {
    toDomain(_model: unknown): unknown {
        throw new Error("Method not implemented.");
    }
    toPersistence(_domain: unknown): unknown {
        throw new Error("Method not implemented.");
    }
}