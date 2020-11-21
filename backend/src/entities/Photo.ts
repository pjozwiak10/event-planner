import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Gallery } from "./Gallery";

@ObjectType()
@Entity()
export class Photo extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  url: string;

  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Gallery)
  @ManyToOne(() => Gallery, gallery => gallery.photos)
  @JoinColumn({ name: 'gallery_id' })
  gallery: Gallery;

  @Column('uuid', { name: 'gallery_id' })
  galleryId: string;
}