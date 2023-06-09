import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'User'})
export class User {

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 200 })
    photo: string;

    @Column({ type: 'varchar', length: 20 })
    matricula: string;

    @Column({ default: false })
    isRoot: boolean;

    @Column({ type: 'varchar', length: 100 })
    password: string;


}
