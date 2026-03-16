import { UserEntity } from '../../entities/user.entity.js';

export interface IUserRepository {
    findById(id: number): Promise<UserEntity | null>;
    save(user: UserEntity): Promise<void>;
}