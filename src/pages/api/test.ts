// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prismaCliente from "@/prisma";
import { Users } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).send("Deu bom");
}
