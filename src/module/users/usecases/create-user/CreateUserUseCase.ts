import { Users } from "@prisma/client";
import InterfaceCreateUsersDtos from "../../dtos/InterfaceCreateUserDtos";
import UserRepostory from "../../implementations/UserRepository";
import InterfacerUsersRepositoy from "../../repository/InterfaceUsers";

export default class CreateUserUseCase {
  constructor(private userRepository: InterfacerUsersRepositoy) {}

  async execute(user: InterfaceCreateUsersDtos): Promise<Users | undefined> {
    const userFinded = await this.userRepository.findByEmail(user.email);

    if (userFinded) {
      return undefined;
    } else {
      const userCreated = this.userRepository.create(user);
      return userCreated;
    }
  }
}
