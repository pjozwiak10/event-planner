import { redis } from "../redis";
import { v4 } from 'uuid';

export const createConfirmUserLink = async (userId: string) => {
  const token = v4();
  await redis.set(token, userId, 'ex', 1000 * 60 * 60 * 24); //1 day

  return `http://localhost:3000/confirm-user/${token}`;
}