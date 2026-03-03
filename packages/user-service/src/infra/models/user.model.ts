import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    passwordHash: string;

    @Column()
    salt: string;
}