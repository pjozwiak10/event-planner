import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Offer } from "./Offer";

@Entity()
export class OfferAttributeValue extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'offer_id' })
  offerId: string;

  @PrimaryColumn('uuid', { name: 'attribute_value_id' })
  attributeValueId: string;

  @ManyToOne(() => Offer, offer => offer.attributeValueConnection, { primary: true })
  @JoinColumn({ name: 'offer_id' })
  offer: Promise<Offer>

  @ManyToOne(() => AttributeValue, attributeValue => attributeValue.offerConnection, { primary: true })
  @JoinColumn({ name: 'attribute_value_id' })
  attributeValue: Promise<AttributeValue>
}