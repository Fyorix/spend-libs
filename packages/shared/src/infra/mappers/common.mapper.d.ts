export interface CommonMapper<Model, Entity> {
    toDomain(model: Model): Entity;
    toPersistence(domain: Entity): Model;
}
