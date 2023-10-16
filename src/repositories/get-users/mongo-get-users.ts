import { iGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements iGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Felipe",
        lastName: "Rocha",
        email: "felipe@gmail.com",
        password: "123",
      },
    ];
  }
}
