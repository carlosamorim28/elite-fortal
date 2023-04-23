// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import InterfaceCreateUsersDtos from "@/module/users/dtos/InterfaceCreateUserDtos";
import UserRepostory from "@/module/users/implementations/UserRepository";
import CreateUserUseCase from "@/module/users/usecases/create-user/CreateUserUseCase";
import prismaCliente from "@/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const usersRepository = new UserRepostory();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  method[req.method as "GET" | "POST"](req, res);
}

async function get(req: NextApiRequest, res: NextApiResponse<any>) {
  const users = await prismaCliente.users.findMany();
  res.status(200).send(users);
}

async function post(req: NextApiRequest, res: NextApiResponse<any>) {
  const newUser: InterfaceCreateUsersDtos = req.body;
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  const createdUser = await createUserUseCase.execute(newUser);
  res.status(200).send(createdUser);
}

const method = {
  GET: get,
  POST: post,
};
