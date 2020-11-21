import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Place } from "./Place";

@Entity()
export class PlaceAttributeValue extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'place_id' })
  placeId: string;

  @PrimaryColumn('uuid', { name: 'attribute_value_id' })
  attributeValueId: string;

  @ManyToOne(() => Place, place => place.attributeValueConnection, { primary: true })
  @JoinColumn({ name: 'place_id' })
  place: Promise<Place>

  @ManyToOne(() => AttributeValue, attributeValue => attributeValue.offerConnection, { primary: true })
  @JoinColumn({ name: 'attribute_value_id' })
  attributeValue: Promise<AttributeValue>
}