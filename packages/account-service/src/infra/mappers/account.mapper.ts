import {CommonMapper} from "../../../../shared/src/infra/mappers/common.mapper";

export class AccountMapper implements CommonMapper<any/*AccountModel*/, any/*Account*/> {
    toDomain(model: any) {
        throw new Error("Method not implemented.");
    }
    toPersistence(domain: any) {
        throw new Error("Method not implemented.");
    }
}