import {
    BaseEntity,
    BeforeInsert,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";

  import LoginRoutes from "../../../../features/login/routes/loginRoutes";
  import { Login } from "./login";

  
  @Entity({ name: "recados" })
  export class Recado extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ name: "id_login" })
    loginID: number;

    @Column({name: 'titulo'})
    titulo: string;
  
    @Column({name: 'descricao'})
    descricao: string;
  
    @ManyToOne(() => Login, (login) => login)
    @JoinColumn({ name: "id_login", referencedColumnName: "id" })
    login?: LoginRoutes
  
    constructor(titulo: string, descricao: string, loginID: number) {
      super();
      this.titulo = titulo;
      this.descricao = descricao;
      this.loginID = loginID;
    }
   
  }
  