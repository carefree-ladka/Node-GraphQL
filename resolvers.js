import { v4 as uuidv4 } from 'uuid'

/* 
Resolvers will have 4 arguments in their methods:
parent or root, args , context and info
Let's focus on args for now

args :  args an object which have all arguments a mutation has in it.

addTodo(task: String!): Todo!

so when you write a resolver for addTodo

it will be addTodo(parent, args, context, info){}
args = {
     task:'something'
}
*/

const todos = []; // In-memory data storage

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
      console.log('#',args);
      
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