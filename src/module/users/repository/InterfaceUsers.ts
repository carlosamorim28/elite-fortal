import { Users } from "@prisma/client";
import InterfaceCreateUsersDtos from "../dtos/InterfaceCreateUserDtos";

interface InterfacerUsersRepositoy {
  create(user: InterfaceCreateUsersDtos): Promise<Users>;
  findByEmail(email: string): Promise<Users>;
}

export default InterfacerUsersRepositoy;
