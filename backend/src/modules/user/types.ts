import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FieldMessage {
  @Field()
  field: string;
  @Field()
  message: string;
  @Field()
  success: boolean;
}
