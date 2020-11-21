import { Arg, Mutation, Resolver } from "type-graphql";

import { User } from "../../../entities/User";
import { FieldMessage } from "../types";
import { createForgotPasswordLink } from '../../../utils/createForgotPasswordLink';
import { sendEmail } from "../../../utils/sendEmail";

@Resolver()
export class ForgotPasswordResolver {
  @Mutation(() => [FieldMessage])
  async forgotPassword(
    @Arg('email') email: string,
  ): Promise<FieldMessage[]> {
    const user = await User.findOne({ where: { email } });
    if (!user) return [{
      field: 'forgotPassword',
      message: 'Email was sent. Check your inbox.',
      success: true,
    }]
    const link = await createForgotPasswordLink(user.id);
    await sendEmail(
      email,
      'Change your password',
      `<p>Please click link below to change your password</p>
      <a style="display:block;" href="${link}">Change your password</a>`,
    )
    return [{
      field: 'forgotPassword',
      message: 'Email was sent. Check your inbox.',
      success: true,
    }]
  }
}