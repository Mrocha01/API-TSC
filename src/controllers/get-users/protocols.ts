import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface iGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface iGetUsersRepository {
  getUsers(): Promise<User[]>;
}
