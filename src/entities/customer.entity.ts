import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'customers' })
@Unique(["email", "cpf"])
export default class Customer {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'first_name' })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    roles: string;

    @Column()
    cpf: number;

    @Column()
    status: number;

    @Column({ name: 'last_login' })
    lastLogin: Date;

    @Column({ name: 'created_at' })
    createdAt: Date;

}