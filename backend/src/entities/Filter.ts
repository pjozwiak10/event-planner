import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attribute } from "./Attribute";
import { FilterValue } from "./FilterValue";

@ObjectType()
@Entity()
export class Filter extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  type: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  character: string;

  @Field(() => Attribute)
  @OneToOne(() => Attribute, attribute => attribute.filter)
  @JoinColumn({ name: 'attribute_id' })
  attribute: Attribute;

  @Column('uuid', { name: 'attribute_id' })
  attributeId: string;

  @Field(() => [FilterValue])
  @OneToMany(() => FilterValue, filterValue => filterValue.filter)
  values: FilterValue[];
}