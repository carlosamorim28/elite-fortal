import { Users } from "@prisma/client";
import InterfacerUsersRepositoy from "../../repository/InterfaceUsers";

export default class LoginUseCase {
  constructor(private userRepository: InterfacerUsersRepositoy) {}

  async execute(user: InterfaceLoginDTO): Promise<Users> {
    const userFinded = await this.userRepository.findByEmail(user.email);
    if (userFinded && userFinded.password == user.password) {
      return userFinded;
    } else {
      console.log(user);
      throw new Error(`email or password denied ${user.email}`);
    }
  }
}
