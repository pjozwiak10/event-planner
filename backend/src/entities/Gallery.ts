import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Photo } from "./Photo";
import { Video } from "./Video";
import { Offer } from "./Offer";

@ObjectType()
@Entity()
export class Gallery extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Offer)
  @ManyToOne(() => Offer, offer => offer.galleries)
  @JoinColumn({ name: 'offerId' })
  offer: Offer;

  @Column('uuid', { nullable: true, name: 'offer_id' })
  offerId: string;

  @Field(() => [Photo])
  @OneToMany(() => Photo, photo => photo.gallery)
  photos: Photo[];

  @Field(() => [Video])
  @OneToMany(() => Video, video => video.gallery)
  videos: Video[];
}