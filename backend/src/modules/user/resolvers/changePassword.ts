import { Ctx, Mutation, Resolver, Field, Args, ArgsType } from "type-graphql";
import { Length } from "class-validator";
import argon2 from 'argon2';

import { User } from "../../../entities/User";
import { FieldMessage } from "../types";
import { MyContext } from '../../../types'

@ArgsType()
class ChangePasswordArgs {
  @Length(5, 255)
  @Field()
  newPassword: string;

  @Field()
  token: string;
}

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => [FieldMessage])
  async changePassword(
    @Args() { newPassword, token }: ChangePasswordArgs,
    @Ctx() { redis }: MyContext,
  ): Promise<FieldMessage[]> {
    const userId = await redis.get(token);
    if (!userId) return [{
      field: 'changePassword',
      message: 'Token expired',
      success: false,
    }];
    const user = await User.findOne(userId);
    if (!user) return [{
      field: 'confirmAccount',
      message: 'User does not exist',
      success: false,
    }];
    const hashedPassword = await argon2.hash(newPassword)
    await User.update({ id: user.id }, { password: hashedPassword });
    return [{
      field: 'confirmAccount',
      message: 'Password was successfully changed. Please login.',
      success: true,
    }];
  }
}