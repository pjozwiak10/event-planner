import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, Generated, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AttributeValue } from "./AttributeValue";
import { Filter } from "./Filter";

@ObjectType()
@Entity()
export class Attribute extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  type: number;

  @Field()
  @Column()
  @Generated('increment')
  value: number;

  @Field(() => [AttributeValue])
  @OneToMany(() => AttributeValue, attributeValue => attributeValue.attribute)
  values: AttributeValue[];

  @Field(() => Filter)
  @OneToOne(() => Filter, filter => filter.attribute)
  filter: Filter;

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}