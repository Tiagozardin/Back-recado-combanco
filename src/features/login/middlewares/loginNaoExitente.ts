import { Request, Response, NextFunction } from "express";
import { Login } from "../../../core/data/database/entities/login";

export default async function LoginNaoExiste(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  const existe = await Login.findOne( id );
  if (!existe) {
    return res.status(404).json({
      msg: "Username não encontrado",
    });
  }

  next();
}