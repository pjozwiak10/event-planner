import "reflect-metadata";
import "dotenv/config";
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from "typeorm";
import session from 'express-session';
import connectRedis from 'connect-redis';
import path from 'path';
import cors from 'cors';

import { createSchema } from './utils/createSchema';
import { redis } from './redis';
import { COOKIE_SESSION_NAME, PRODUCTION } from './constants';
import { createOfferAttributeLoader } from "./utils/createOfferAttributeLoader";

const startServer = async () => {

  await createConnection();
  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      offerAttributesLoader: createOfferAttributeLoader(),
    })
  });

  const app = express();
  const RedisStore = connectRedis(session);
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_SESSION_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 5, // 5 years
        httpOnly: true,
        sameSite: 'lax',
        secure: PRODUCTION,
      },
      secret: process.env.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
    })
  )
  app.use(express.static(path.join(__dirname, '../public')));
  server.applyMiddleware({ app, cors: false });

  app.listen(process.env.PORT, () =>
    console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
}

startServer();
