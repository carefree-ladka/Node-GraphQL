# Clone this repo and follow the below steps:

1. npm install
2. npm run start 


# Go to http://localhost:4000/ and you'll be redirected to https://studio.apollographql.com/sandbox/explorer 

**Try below Queries**


# Query All Todos:

```graphql
query {
  todos {
    id
    task
    completed
  }
}
```

# Query a Todo:

```graphql
query{
  todo(id: $todoId) {
    id
    task
    completed
  }
}

Like below :

query{
  todo(id: "be4cfc83-3d12-481c-85e0-64182099f2fe") {
    id
    task
    completed
  }
}

Here you can fetch id, task & completed based on your needs
```

# Add a New Todo:

```graphql
mutation {
  addTodo(task: "Learn GraphQL") {
    id
    task
    completed
  }
}
```

# Update a Todo:

```graphql
mutation {
  updateTodo(id: "TODO_ID_HERE", completed: true) {
    id
    task
    completed
  }
}
```

# Delete a Todo:

```graphql
mutation {
  deleteTodo(id: "TODO_ID_HERE")
}
```