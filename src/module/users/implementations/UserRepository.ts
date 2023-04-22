import { Users } from "@prisma/client";
import InterfaceCreateUsersDtos from "../dtos/InterfaceCreateUserDtos";
import InterfacerUsers from "../repository/InterfaceUsers";
import prismaCliente from "@/prisma";

export default class UserRepostory implements InterfacerUsers {
  async findByEmail(email: string): Promise<Users> {
    const user = await prismaCliente.users.findFirst({ where: { email } });
    return user as Users;
  }
  async create(user: InterfaceCreateUsersDtos): Promise<Users> {
    const userCreated = await prismaCliente.users.create({ data: user });
    return userCreated;
  }
}
