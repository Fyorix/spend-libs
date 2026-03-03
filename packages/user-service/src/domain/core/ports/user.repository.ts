export interface IUserRepository {
    findById(id: number): Promise<any/*User | null*/>;
    save(user: any/*User*/): Promise<void>;
}