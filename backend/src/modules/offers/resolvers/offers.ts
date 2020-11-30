import { Arg, Field, InputType, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { OffersResponse } from "../types/types";

@InputType()
class FilterObject {
  @Field()
  filterType: string;

  @Field()
  filterCharacter: string;

  @Field()
  filterValue: string;

  @Field(() => [String])
  filterValueValue: string[];
}

@InputType()
class OffersInput {
  @Field()
  category: string;

  @Field(() => [FilterObject], { nullable: true })
  filters?: FilterObject[];
}

const getOffersView = (category: number) => {
  switch (category) {
    case 1:
      return 'offers';
    case 2:
      return 'places_offers';
    case 3:
      return 'organizers_offers';
    case 4:
      return 'photographers_offers';
    default:
      return undefined;
  }
}

const createSqlFilters = (filters: FilterObject[]) => {
  const sqlFilters = filters.map(filter => {
    const attributePrefix = +filter.filterType === 1 ? 'general' : 'specific'
    return (`${attributePrefix}_attribute_value = ${filter.filterValue}::int
    AND ${(() => {
        switch (filter.filterCharacter) {
          case 'text':
            return `${attributePrefix}_attribute_value_value::int[] && '{${filter.filterValueValue.join(',')}}'::int[]`;
          case 'range':
            return filter.filterValueValue.map(filter => {
              const ranges = filter.split('-');
              return `int4range(${ranges[0]},${ranges[1] ? ranges[1] : null},'[]') @> ANY(${attributePrefix}_attribute_value_name::int[])`
            }).join(' OR ');
          case 'input':
            return filter.filterValueValue.map(filter => {
              const ranges = filter.split('-');
              return `int4range(${ranges[0]},${ranges[1] ? ranges[1] : null},'[]') && int4range(split_part(array_to_string(${attributePrefix}_attribute_value_name::varchar[], ''), '-',1)::int,
              split_part(array_to_string(${attributePrefix}_attribute_value_name::varchar[], ''), '-',2)::int, '[]'))`
            }).join(' OR ');
          default:
            return null;
        }
      })()}
    `)
  }).join('AND ')
  return sqlFilters;
}

@Resolver()
export class OffersResolver {
  @Query(() => [OffersResponse])
  async offers(
    @Arg('data') { category, filters }: OffersInput
  ): Promise<OffersResponse[]> {
    const offersView = getOffersView(+category);
    let sqlFilters = '';
    if (filters) {
      sqlFilters = createSqlFilters(filters);
    }
    const offers = await getConnection().query(`
      SELECT DISTINCT offer_id AS "offerId",
      offer_type AS "offerType",
      offer_name AS "offerName",
      subject_name AS "subjectName"
      FROM ${offersView}
      WHERE ${sqlFilters}
    `);
    return offers;
  }
}