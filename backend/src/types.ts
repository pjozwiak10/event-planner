import { Request, Response } from 'express';
import { Redis } from 'ioredis';
import { createOfferAttributeLoader } from './utils/createOfferAttributeLoader';

export type MyContext = {
  req: Request & { session: Express.Session };
  res: Response
  redis: Redis;
  offerAttributesLoader: ReturnType<typeof createOfferAttributeLoader>
};