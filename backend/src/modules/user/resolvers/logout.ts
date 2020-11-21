import { COOKIE_SESSION_NAME } from "../../../constants";
import { Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { MyContext } from "../../../types";
import { FieldMessage } from "../types";
import { isAuth } from "../../../middleware/isAuth";


@Resolver()
export class LogoutResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => [FieldMessage])
  async logout(
    @Ctx() { req, res }: MyContext,
  ): Promise<FieldMessage[]> {
    return new Promise((resolve) => req.session.destroy((err) => {
      res.clearCookie(COOKIE_SESSION_NAME);
      if (err) {
        resolve([{
          field: 'logout',
          message: 'Something goes wrong.',
          success: false,
        }]);
      }
      resolve([{
        field: 'logout',
        message: 'User has been successfully logged out',
        success: true,
      }])
    }))
  }
}