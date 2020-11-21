import { redis } from "../redis";
import { v4 } from 'uuid';

export const createForgotPasswordLink = async (userId: string) => {
  const token = v4();
  await redis.set(token, userId, 'ex', 1000 * 60 * 30); //30 minutes

  return `http://localhost:3000/forgot-password/${token}`;
}