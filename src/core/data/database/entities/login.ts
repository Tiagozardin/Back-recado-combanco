import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";



@Entity({ name: 'login'})
export class Login extends BaseEntity {
    @PrimaryGeneratedColumn({name:'id'})
    id?: number;
    @Column({name:'email'})
    email: string;
    @Column({name:'password'})
    password: string;

   
    constructor(email:string, password: string){
        super();
        this.email = email;
        this.password = password;
    }
}
