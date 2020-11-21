import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Place } from "./Place";
import { Facility } from './Facility';

@Entity()
export class PlaceFacility extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'place_id' })
  placeId: string;

  @PrimaryColumn('uuid', { name: 'facility_id' })
  facilityId: string;

  @ManyToOne(() => Place, place => place.facilityConnection, { primary: true })
  @JoinColumn({ name: 'place_id' })
  place: Promise<Place>

  @ManyToOne(() => Facility, facility => facility.placeConnection, { primary: true })
  @JoinColumn({ name: 'attribute_value_id' })
  facility: Promise<Facility>
}