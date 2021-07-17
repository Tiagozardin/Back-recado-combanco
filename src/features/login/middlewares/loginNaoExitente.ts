import express from "express";
import { Login } from "../../../core/data/database/entities/login";


async function validateNotExistUser(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { email } = req.body;

  const exist = await Login.findOne({ email: email });
  if (!exist) {
    return res.status(404).json({ msg: "Nenhum User encontrado" });
  }
  next();
}

async function validatePassword(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { password } = req.body;

  //console.log("valid Name Middleware");
  const exist = await Login.findOne({ password: password });
  if (!exist) {
    return res.status(400).json({
      msg: "Password dever ser informado corretamente.",
    });
  }

  next();
}
export {  validateNotExistUser, validatePassword };
