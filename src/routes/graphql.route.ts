import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import graphQlSchema from '@schema/index';
import graphQlResolvers from '@resolvers/index';
import { graphqlHTTP } from 'express-graphql';
class GraphqlRoute implements Routes {
  public path = '/graphql';
  public router = Router();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    console.log('object');
    this.router.use(
      this.path,
      graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
      }),
    );
  }
}

export default GraphqlRoute;
