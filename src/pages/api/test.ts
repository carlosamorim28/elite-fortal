// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismaCliente from "@/prisma";
import { PrismaClient, Users } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const prismaCliente = new PrismaClient();
  prismaCliente.$connect().then(() => {
    prismaCliente.users.findMany().then((elements) => {
      res.status(200).send(elements);
    });
  });
}
