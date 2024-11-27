import { v4 as uuidv4 } from 'uuid'

/* 
Resolvers will have 4 arguments in their methods:
parent or root, args , context and info
Let's focus on args for now

args :  args an object which have all arguments a query or mutation  has in it.

addTodo(task: String!): Todo!

so when you write a resolver for addTodo

it will be addTodo(parent, args, context, info){}
args = {
     task:'something'
}
*/

const todos = [
  {
    "id": "be4cfc83-3d12-481c-85e0-64182099f2fe",
    "task": "Learn GraphQL",
    "completed": false
  },
  {
    "id": "2d70b3a6-00f9-4920-a988-76d5debb2108",
    "task": "Learn React",
    "completed": false
  },
  {
    "id": "2bf2add2-195c-4f29-bf69-b2dc9835a925",
    "task": "Learn React + GraphQL",
    "completed": false
  }
]; // In-memory data storage

const resolvers = {

  Query: {
    todos: () => todos,
    todo: (parent, args) => todos.find((todo) => todo.id === args.id),
  },

  Mutation: {
    addTodo: (parent, args) => {
      const newTodo = { id: uuidv4(), task: args.task, completed: false };
      todos.push(newTodo);
      return newTodo;
    },

    updateTodo: (parent, args) => {
      console.log('#', args);

      const { id, task, completed } = args
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      if (todoIndex === -1) throw new Error('Todo not found');

      if (task !== undefined) todos[todoIndex].task = task;
      if (completed !== undefined) todos[todoIndex].completed = completed;

      return todos[todoIndex];
    },

    deleteTodo: (parent, { id }) => {
      const todoIndex = todos.findIndex((todo) => todo.id === id);
      if (todoIndex === -1) throw new Error('Todo not found');

      todos.splice(todoIndex, 1);
      return `Todo with id ${id} was deleted.`;
    },
  },
};


export default resolvers
