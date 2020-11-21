import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Offer } from "./Offer";

@ObjectType()
@Entity()
export class Reward extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 100 })
  name: string;

  @Field()
  @Column({ name: 'photo_url', nullable: true })
  photoUrl: string;

  @Field()
  @Column({ nullable: true, length: 500 })
  description: string;

  @ManyToOne(() => Offer, offer => offer.rewards)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;

  @Column({ name: 'offer_id' })
  offerId: string;

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}