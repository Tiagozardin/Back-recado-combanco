import { Request, Response, NextFunction } from "express";
import { Login } from "../../../core/data/database/entities/login";

export default async function LoginJaExiste(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const existe = await Login.findOne({ email: email });
  if (existe) {
    return res.status(400).json({
      msg: "Já existe um User cadastrado com este nome.",
    });
  }

  next();
}