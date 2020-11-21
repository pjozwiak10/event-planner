import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Filter } from "./Filter";

@ObjectType()
@Entity()
export class FilterValue extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  from: number;

  @Field()
  @Column({ nullable: true })
  to: number;

  @Field(() => Filter)
  @ManyToOne(() => Filter, filter => filter.values)
  @JoinColumn({ name: 'filter_id' })
  filter: Filter;

  @Column({ name: 'filter_id' })
  filterId: string;
}