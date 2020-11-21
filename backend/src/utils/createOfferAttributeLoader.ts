import DataLoader from 'dataloader';
import { AttributeValue } from '../entities/AttributeValue';
import { OfferAttributeValue } from '../entities/OfferAttributeValue';
import { getConnection } from 'typeorm';

const batchOfferAttributes = async (offerIds: readonly string[]) => {
  // const offerAttributeValues = await OfferAttributeValue.find({
  //   join: {
  //     alias: 'offerAttributeValue',
  //     innerJoinAndSelect: {
  //       attributeValue: 'offerAttributeValue.attributeValue',
  //     },
  //   },
  //   where: {
  //     offerId: In(offerIds as string[]),
  //   },
  // });

  const offerAttributeValues = await getConnection()
    .createQueryBuilder()
    .select('offerAttributeValue')
    .from(OfferAttributeValue, 'offerAttributeValue')
    .where("offerAttributeValue.offerId IN (:...offerIds)", { offerIds })
    .innerJoinAndSelect('offerAttributeValue.attributeValue', 'attributeValue')
    .leftJoinAndSelect('attributeValue.attribute', 'attribute')
    .getMany()

  const offerIdToAttributeValues: { [key: string]: AttributeValue[] } = {};

  offerAttributeValues.forEach(oav => {
    if (oav.offerId in offerIdToAttributeValues) {
      offerIdToAttributeValues[oav.offerId].push((oav as any).__attributeValue__)
    } else {
      offerIdToAttributeValues[oav.offerId] = [(oav as any).__attributeValue__,]
    }
  });
  return offerIds.map(offerId => offerIdToAttributeValues[offerId] || []);
}

export const createOfferAttributeLoader = () => new DataLoader(batchOfferAttributes);