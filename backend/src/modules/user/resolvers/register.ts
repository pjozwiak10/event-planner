import argon2 from "argon2";
import { IsEmail, Length } from "class-validator";
import { Arg, Field, InputType, Mutation, Resolver } from "type-graphql";

import { User } from "../../../entities/User";
import { FieldMessage } from "../types";
import { createConfirmUserLink } from '../../../utils/createConfirmUserLink';
import { sendEmail } from "../../../utils/sendEmail";

@InputType()
class RegisterInput {
  @Length(5, 255)
  @Field()
  username: string;

  @Length(5, 255)
  @IsEmail()
  @Field()
  email: string;

  @Length(5, 255)
  @Field()
  password: string;
}

@Resolver()
export class RegisterResolver {
  @Mutation(() => [FieldMessage])
  async register(
    @Arg('data') { email, password, username }: RegisterInput
  ): Promise<FieldMessage[]> {

    const usernameTaken = await User.findOne({ where: { username } });
    if (usernameTaken) return [{
      field: 'username',
      message: 'Username already taken.',
      success: false,
    }]

    const userAlreadyExists = await User.findOne({ where: { email } });
    if (userAlreadyExists) return [{
      field: 'email',
      message: 'User already exists.',
      success: false,
    }];

    const hashedPassword = await argon2.hash(password);

    const user = await User.create({
      email, password: hashedPassword, username,
    }).save();

    const link = await createConfirmUserLink(user.id);
    await sendEmail(
      email,
      'Confirm your email',
      `<p>Please click link below to confirm your account</p>
      <a style="display:block;" href="${link}">Confirm account</a>`,
    )

    return [{
      field: 'register',
      message: 'User successfully registered.',
      success: true,
    }]
  }
}