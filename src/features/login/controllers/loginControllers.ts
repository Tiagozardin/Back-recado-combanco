import {Request, Response} from 'express'
import { Login } from '../../../core/data/database/entities/login';


export default class LoginController{
    public async store(req: Request, res: Response){
        const {email, password} = req.body;

        try{
        const login = await new Login(email, password).save();

        return res.status(201).json(login);
        } catch(error) {
            return res.status(500).json(error);
        }
    }

    public async login(req: Request, res: Response) {
        const { email, password } = req.body;
        
        const exist = await Login.findOne({email:email, password:password});
    
        return res.json({id:exist?.id});
      }

    public async show(req: Request, res: Response){
        const {id} = req.params;

        const login = await Login.findOne(id);
        if(!login){
            return res.status(404).json({
                msg:"User não encontrado"
            });
        }
        return res.json(login);
    }

    public async delete(req: Request, res: Response){
        const {id} = req.params;

        const login = await Login.findOne(id);
        if(!login){
            return res.status(404).json({
                msg:"User não encontrado"
            });
        }
        const result = await Login.delete(id);
        
        return res.status(200).json((result.affected as number) > 0 ? "User excluido" : "Não removeu");
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { email, password} = req.body;
    
        const login = await Login.findOne(id);
        if (!login) {
          return res.status(404).json({
            msg: "User não encontrado",
          });
        }
    
        const result = await Login.update(id, {
            email, password
        });
    
        return res.json(result);
      }
}