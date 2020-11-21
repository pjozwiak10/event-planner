import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Offer } from "./Offer";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ unique: true })
    username: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ default: false, name: 'confirmed_user' })
    confirmedUser: boolean;

    @Field(() => String)
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Field(() => [Offer])
    @OneToMany(() => Offer, offer => offer.user)
    offers: Offer[];
}