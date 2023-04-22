// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import InterfaceCreateUsersDtos from "@/module/users/dtos/InterfaceCreateUserDtos";
import UserRepostory from "@/module/users/implementations/UserRepository";
import CreateUserUseCase from "@/module/users/usecases/create-user/CreateUserUseCase";
import LoginUseCase from "@/module/users/usecases/login/LoginUseCase";
import type { NextApiRequest, NextApiResponse } from "next";

const usersRepository = new UserRepostory();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  method[req.method as "POST"](req, res);
}

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const loginUser: InterfaceCreateUsersDtos = req.body;
  const loginUseCase = new LoginUseCase(usersRepository);
  const logedUser = await loginUseCase.execute(loginUser);
  console.log("Esteve aqui");
  res.status(200).json(logedUser);
}

const method = {
  POST: post,
};
