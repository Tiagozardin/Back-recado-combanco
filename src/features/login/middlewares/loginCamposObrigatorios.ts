import { Request, Response, NextFunction } from "express";

export default function LoginCamposObrigatorios(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      msg: "O email dever ser informado",
    });
  }

  if (email.trim().length < 3) {
    return res.status(400).json({
      msg: "O nome deve conter ao menos 3 caracteres",
    });
  }

  if(!password){
    return res.status(400).json({
        msg: "Password deve ser informado"
    });
}

  next();
}