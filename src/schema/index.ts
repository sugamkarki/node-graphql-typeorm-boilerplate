import { buildSchema } from 'graphql';

export default buildSchema(`
  type User{
    id:ID
    firstName:String!
    lastName:String!
    email:String!
    password:String
  }
  input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String
  }
  type RootQuery{
    users:[User!]!
  }
  type RootMutation{
    createUser(userInput:UserInput):User!
  }
  schema {
    query:RootQuery
    mutation:RootMutation
  }
  `);
