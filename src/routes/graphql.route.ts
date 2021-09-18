import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import graphql, { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

class GraphqlRoute implements Routes {
  public path = '/graphql';
  public router = Router();
  private schema: GraphQLSchema;
  constructor() {
    this.initializeRoutes();
    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      }),
    });
    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        getAllUsers:
      },
    });
    const Mutation = 'mutation';
    this.schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
  }

  private initializeRoutes() {
    // console.log('here');
    this.router.use(
      this.path,
      graphqlHTTP({
        schema: this.schema,
        graphiql: true,
      }),
    );
  }
}

export default GraphqlRoute;
