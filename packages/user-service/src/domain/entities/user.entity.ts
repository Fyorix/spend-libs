export class UserEntity {
    private id: number;
    private username: string;

    constructor(id: number, username: string) {
        this.id = id;
        this.username = username;
    }

    // Getters and setters

    getId(): number {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    /**
     * Additional methods below
     */
}