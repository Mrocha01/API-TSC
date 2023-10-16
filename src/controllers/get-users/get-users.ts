import { iGetUsersController, iGetUsersRepository } from "./protocols";

export class GetUsersControllers implements iGetUsersController {
  constructor(private readonly getUsersRepository: iGetUsersRepository) {}

  async handle() {
    try {
      // validar requisição
      // direcionar chamada para o repositorio
      const users = await this.getUsersRepository.getUsers();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
