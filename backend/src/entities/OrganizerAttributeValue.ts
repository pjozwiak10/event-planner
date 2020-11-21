import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Organizer } from "./Organizer";

@Entity()
export class OrganizerAttributeValue extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'organizer_id' })
  organizerId: string;

  @PrimaryColumn('uuid', { name: 'attribute_value_id' })
  attributeValueId: string;

  @ManyToOne(() => Organizer, organizer => organizer.attributeValueConnection, { primary: true })
  @JoinColumn({ name: 'organizer_id' })
  organizer: Promise<Organizer>

  @ManyToOne(() => AttributeValue, attributeValue => attributeValue.organizerConnection, { primary: true })
  @JoinColumn({ name: 'attribute_value_id' })
  attributeValue: Promise<AttributeValue>
}