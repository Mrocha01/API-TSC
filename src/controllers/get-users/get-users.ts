import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { iGetUsersRepository } from "./protocols";

export class GetUsersControllers implements IController {
  constructor(private readonly getUsersRepository: iGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      // validar requisição
      // direcionar chamada para o repositorio
      const users = await this.getUsersRepository.getUsers();
      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
