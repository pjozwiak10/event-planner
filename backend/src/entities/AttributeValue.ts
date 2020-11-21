import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Attribute } from "./Attribute";
import { OfferAttributeValue } from "./OfferAttributeValue";
import { PlaceAttributeValue } from "./PlaceAttributeValue";
import { OrganizerAttributeValue } from './OrganizerAttributeValue';
import { PhotographerAttributeValue } from './PhotographerAttributeValue'

@ObjectType()
@Entity()
export class AttributeValue extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  @Generated('increment')
  value: number;

  @Field(() => Attribute)
  @ManyToOne(() => Attribute, attribute => attribute.values)
  @JoinColumn({ name: 'attribute_id' })
  attribute: Attribute;

  @Column({ name: 'attribute_id' })
  attributeId: string;

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => OfferAttributeValue, oav => oav.offer)
  offerConnection: Promise<OfferAttributeValue[]>

  @OneToMany(() => PlaceAttributeValue, pav => pav.place)
  placeConnection: Promise<PlaceAttributeValue[]>

  @OneToMany(() => OrganizerAttributeValue, oav => oav.organizer)
  organizerConnection: Promise<OrganizerAttributeValue[]>

  @OneToMany(() => PhotographerAttributeValue, pav => pav.photographer)
  photographerConnection: Promise<PhotographerAttributeValue[]>
}