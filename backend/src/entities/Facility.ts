import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PlaceFacility } from "./PlaceFacility";

@ObjectType()
@Entity()
export class Facility extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  class: string;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => PlaceFacility, placeFacility => placeFacility.facility)
  placeConnection: Promise<PlaceFacility>

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}