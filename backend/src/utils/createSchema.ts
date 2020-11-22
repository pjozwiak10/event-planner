import { buildSchema } from "type-graphql";

import { RegisterResolver } from "../modules/user/resolvers/register";
import { LoginResolver } from "../modules/user/resolvers/login";
import { ConfirmUserResolver } from "../modules/user/resolvers/confirmUser";
import { ForgotPasswordResolver } from "../modules/user/resolvers/forgotPassword";
import { ChangePasswordResolver } from "../modules/user/resolvers/changePassword";
import { LogoutResolver } from "../modules/user/resolvers/logout";
import { MeResolver } from "../modules/user/resolvers/me";
import { OffersResolver } from "../modules/offers/resolvers/offers";
import { HelloResolver } from '../modules/hello/hello';

export const createSchema = () => buildSchema({
  resolvers: [
    RegisterResolver,
    LoginResolver,
    ConfirmUserResolver,
    ForgotPasswordResolver,
    ChangePasswordResolver,
    LogoutResolver,
    MeResolver,
    OffersResolver,
    HelloResolver,
  ]
});