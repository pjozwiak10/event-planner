import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { MyContext } from "../../../types";
import { User } from "../../../entities/User";
import { FieldMessage } from "../types";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => [FieldMessage])
  async confirmUser(
    @Arg('token') token: string,
    @Ctx() { redis }: MyContext,
  ): Promise<FieldMessage[]> {
    const userId = await redis.get(token);
    if (!userId) return [{
      field: 'confirmAccount',
      message: 'Token expired.',
      success: false,
    }];
    const user = await User.findOne(userId);
    if (!user) return [{
      field: 'confirmAccount',
      message: 'User does not exist.',
      success: false,
    }];
    await User.update({ id: user.id }, { confirmedUser: true });
    await redis.del(token);
    return [{
      field: 'confirmUser',
      message: 'Your account was successfully confirmed.',
      success: true,
    }];
  }
}