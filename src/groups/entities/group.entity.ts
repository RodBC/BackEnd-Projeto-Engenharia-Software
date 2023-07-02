import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group {
    @Column() 
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}
