import { Request, Response, NextFunction } from "express";

export default function RecadoCamposObrigatorios(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { titulo, descricao } = req.body;

  if (!titulo) {
    return res.status(400).json({
      msg: "O titulo dever ser informado",
    });
  }

  if (titulo.trim().length < 3) {
    return res.status(400).json({
      msg: "O titulo deve conter ao menos 3 caracteres",
    });
  }

  if(!descricao){
    return res.status(400).json({
        msg: "Descricao deve ser informado"
    });
}

  next();
}