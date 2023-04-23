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
  fetch("https://www.dnd5eapi.co/api/ability-scores/cha", {
    method: "GET",
  })
    .then((enconderElements) => {
      enconderElements.json().then((elements) => {
        res.status(200).send(elements);
      });
    })
    .catch((error) => {
      res.status(500).send({ name: "Error: ", error });
    })
    .catch((error) => {
      res.status(500).send({ name: "Error: ", error });
    });
}
