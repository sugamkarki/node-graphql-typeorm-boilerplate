import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import userData from '../../MOCK_DATA.json';
class GraphqlRoute implements Routes {
  public path = '/graphql';
  public router = Router();
  private schema: GraphQLSchema;
  constructor() {
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
        getAllUsers: {
          type: new GraphQLList(UserType),
          args: { id: { type: GraphQLInt } },
          resolve(parent, args) {
            return userData;
          },
        },
      },
    });
    const Mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        createUser: {
          type: UserType,
          args: {
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
          },
          resolve(parent, args) {
            userData.push({
              id: userData.length + 1,
              firstName: args.firstName,
              lastName: args.lastName,
              email: args.email,
              password: args.password,
            });
            return args;
          },
        },
      },
    });
    this.schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.use(
      '',
      graphqlHTTP({
        graphiql: true,
        schema: this.schema,
      }),
    );
  }
}

export default GraphqlRoute;
