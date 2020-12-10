import { MaxLength } from "class-validator";
import { Args, ArgsType, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import argon2 from 'argon2';

import { User } from "../../../entities/User";
import { MyContext } from "src/types";
import { FieldMessage } from "../types";

@ArgsType()
class LoginArgs {
  @MaxLength(255)
  @Field()
  email: string;

  @MaxLength(255)
  @Field()
  password: string;
}

@ObjectType()
class LoginResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [FieldMessage], { nullable: true })
  messages?: FieldMessage[];
}

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginResponse)
  async login(
    @Args() { email, password }: LoginArgs,
    @Ctx() { req }: MyContext,
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) return {
      messages: [{
        field: 'login',
        message: 'Invalid credentials.',
        success: false,
      }]
    };

    if (!user.confirmedUser) return {
      messages: [{
        field: 'login',
        message: 'Your account has not been confirmed. Please check your email',
        success: false,
      }]
    };

    const valid = await argon2.verify(user.password, password);

    if (!valid) return {
      messages: [{
        field: 'login',
        message: 'Invalid credentials.',
        success: false,
      }]
    };

    req.session.userId = user.id;
    return { user };
  }
}