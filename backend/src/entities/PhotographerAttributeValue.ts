import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Photographer } from "./Photographer";

@Entity()
export class PhotographerAttributeValue extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'photographer_id' })
  photographerId: string;

  @PrimaryColumn('uuid', { name: 'attribute_value_id' })
  attributeValueId: string;

  @ManyToOne(() => Photographer, photographer => photographer.attributeValueConnection, { primary: true })
  @JoinColumn({ name: 'photographer_id' })
  photographer: Promise<Photographer>

  @ManyToOne(() => AttributeValue, attributeValue => attributeValue.photographerConnection, { primary: true })
  @JoinColumn({ name: 'attribute_value_id' })
  attributeValue: Promise<AttributeValue>
}