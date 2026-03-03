import { IUserRepository } from "../../domain/core/ports/user.repository";

export class TypeORMUserRepository implements IUserRepository {
    findById(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    save(user: any): Promise<void> {
        throw new Error("Method not implemented.");
    }   
}