import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Offer } from "./Offer";
import { PlaceAttributeValue } from "./PlaceAttributeValue";
import { PlaceFacility } from "./PlaceFacility";

@ObjectType()
@Entity()
export class Place extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => PlaceFacility, placeFacility => placeFacility.place)
  facilityConnection: Promise<PlaceFacility>

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('uuid', { name: 'user_id' })
  userId: string;

  @Field(() => Offer)
  @OneToOne(() => Offer, offer => offer.place)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @Column('uuid', { name: 'offer_id' })
  offerId: string;

  @OneToMany(() => PlaceAttributeValue, pav => pav.place)
  attributeValueConnection: Promise<PlaceAttributeValue>
}