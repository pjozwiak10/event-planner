import { MyContext } from "src/types";
import { Ctx, Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Gallery } from "./Gallery";
import { OfferAttributeValue } from "./OfferAttributeValue";
import { Organizer } from "./Organizer";
import { Photographer } from "./Photographer";
import { Place } from "./Place";
import { PriceListType } from "./PriceListType";
import { Reward } from "./Reward";
import { User } from "./User";

@ObjectType()
@Entity()
export class Offer extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  type: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [String])
  @Column('text', { array: true })
  mails: string[];

  @Field(() => [String])
  @Column('text', { array: true })
  phones: string[];

  @Field()
  @Column()
  street: string;

  @Field()
  @Column({ name: 'house_number' })
  houseNumber: number;

  @Field()
  @Column({ name: 'flat_number' })
  flatNumber: number;

  @Field()
  @Column()
  city: string;

  @Field()
  @Column({ name: 'zip_code' })
  zipCode: string;

  @Field()
  @Column()
  country: string;

  @Field()
  @Column({ length: 30 })
  advantage: string;

  @Field()
  @Column({ length: 255, name: "short_description" })
  shortDescription: string;

  @Field()
  @Column({ length: 2000, name: "long_description" })
  longDescription: string;

  @Field(() => PriceListType)
  @ManyToOne(() => PriceListType, priceListType => priceListType.offers)
  @JoinColumn({ name: 'price_list_type_id' })
  priceListType: PriceListType;

  @Column({ name: 'price_list_type_id' })
  priceListTypeId: string;

  @Field()
  @Column({ name: 'facebook_link', nullable: true })
  facebookLink: string;

  @Field()
  @Column({ name: 'instagram_link', nullable: true })
  instagramLink: string;

  @Field()
  @Column({ name: 'pinterest_link', nullable: true })
  pinterestLink: string;

  @Field()
  @Column({ name: 'company_link', nullable: true })
  companyLink: string;

  @Field(() => [Reward])
  @OneToMany(() => Reward, reward => reward.offer)
  rewards: Reward[];

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => User)
  @ManyToOne(() => User, user => user.offers)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('uuid', { name: 'user_id' })
  userId: string;

  @Field(() => [Gallery])
  @OneToMany(() => Gallery, gallery => gallery.offer)
  galleries: Gallery[];

  @Field(() => Place)
  @OneToOne(() => Place, place => place.offer)
  place: Place;

  @Field(() => Organizer)
  @OneToOne(() => Organizer, organizer => organizer.offer)
  organizer: Organizer;

  @Field(() => Photographer)
  @OneToOne(() => Photographer, photographer => photographer.offer)
  photographer: Photographer;

  @OneToMany(() => OfferAttributeValue, oav => oav.offer)
  attributeValueConnection: Promise<OfferAttributeValue>

  @Field(() => [AttributeValue])
  async attributes(
    @Ctx() { offerAttributesLoader }: MyContext,
  ) {
    return offerAttributesLoader.load(this.id);
  }
}