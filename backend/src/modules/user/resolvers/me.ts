import { MyContext } from "../../../types";
import { Ctx, Field, ObjectType, Query, Resolver } from "type-graphql";
import { User } from "../../../entities/User";
import { FieldMessage } from "../types";

@ObjectType()
class MeResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [FieldMessage], { nullable: true })
  messages?: FieldMessage[];
}

@Resolver()
export class MeResolver {
  @Query(() => MeResponse)
  async me(
    @Ctx() { req }: MyContext
  ): Promise<MeResponse> {
    if (!req.session.userId) return {
      messages: [{
        field: 'me',
        message: 'Not Authenticated!',
        success: false,
      }]
    }
    return { user: await User.findOne(req.session.userId) };
  }
}