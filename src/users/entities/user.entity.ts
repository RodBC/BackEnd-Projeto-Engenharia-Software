import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @Column() 
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}
