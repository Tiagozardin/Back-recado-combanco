import { Request, Response } from "express";
import { Recado } from "../../../core/data/database/entities/recado";

export default class RecadoController {
  public async store(req: Request, res: Response) {
    const { titulo, descricao, id_login } = req.body;

    const recado = await new Recado(titulo, descricao, id_login ).save();

    return res.status(200).json(recado);
  }
  
  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const recado = await Recado.findOne(id);

    return res.json(recado);
  }

  public async index(req: Request, res: Response){
    const recados = await Recado.find();

    return res.json(recados);
}

public async delete(req: Request, res: Response){
    const {id} = req.params;

    const recado = await Recado.findOne(id);
    if(!recado){
        return res.status(404).json({
            msg:"User não encontrado"
        });
    }
    const result = await Recado.delete(id);
    
    return res.status(200).json((result.affected as number) > 0 ? "Recado excluido" : "Não removeu");
}

public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, descricao,} = req.body;

    const recado = await Recado.findOne(id);
    if (!recado) {
      return res.status(404).json({
        msg: "User não encontrado",
      });
    }

    const result = await Recado.update(id, {
        titulo, descricao
    });

    return res.json(result);
  }
}