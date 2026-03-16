import { UserEntity } from "../../domain/entities/user.entity.js";
import { IUserRepository } from "../../domain/core/ports/user.repository.js";

export class TypeORMUserRepository implements IUserRepository {
    async findById(_id: number): Promise<UserEntity | null> {
        throw new Error("Method not implemented.");
    }
    async save(_user: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }   
}