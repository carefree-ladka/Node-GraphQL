# Clone this repo and follow the below steps:

1. npm install
2. npm run start 


**Go to http://localhost:4000/ and you'll be redirected to https://studio.apollographql.com/sandbox/explorer**

**Try below Queries**


![image](https://github.com/user-attachments/assets/8ee3b4ca-eba4-493e-a315-4630742f6f51)


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

![image](https://github.com/user-attachments/assets/e1867dba-bdbd-4327-9c79-c6b7a3418ad0)

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
