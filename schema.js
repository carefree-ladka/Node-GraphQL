import {gql } from 'apollo-server'


/* 
1 . ! means that field can't be null
2. [] means a list of a particular type

todos: [Todo!]! means:

todos contain a list of Array<Todo> and can't be null and the entire list can't be null
*/

const typeDefs = gql`
  type Todo {
    id: ID!
    task: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    addTodo(task: String!): Todo!
    updateTodo(id: ID!, task: String, completed: Boolean): Todo!
    deleteTodo(id: ID!): String!
  }
`;

export default typeDefs