import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class OffersResponse {
  @Field()
  offerId: string;

  @Field()
  offerType: number;

  @Field()
  offerName: string;

  @Field()
  subjectName: string;
}