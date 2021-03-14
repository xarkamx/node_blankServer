import { UserController } from "../controller/UsersController.js";

export const routes = [
  UserController,
  { path: "/ejemplo", get: (req,res) => res.json("ejemplo") },
];

//export routes;
