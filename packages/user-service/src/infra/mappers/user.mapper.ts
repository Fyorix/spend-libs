import { UserEntity } from '../../domain/entities/user.entity.js';
import { UserModel } from '../models/user.model.js';

export class UserMapper {
    static toDomain(model: UserModel): UserEntity {
        return new UserEntity(model.id, model.username);
    }

    static toPersistence(domain: UserEntity): UserModel {
        const model = new UserModel();
        model.id = domain.getId();
        model.username = domain.getUsername();
        return model;
    }
}
