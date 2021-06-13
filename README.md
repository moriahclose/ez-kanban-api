# EZ Kanban RESTful API
RESTful API to interact with EZ Kanban app

## Users

### Get all users
> GET /users

### Get one user
> GET /users/{id}

### Create a user
> POST /users

### Update a user
> PATCH /users/{id}

### Delete a user
> DELETE /users/{id}

## Boards

### Get all boards a user has access to
> GET /users/{id}/boards

### Get a board
> GET /boards/{id}

### Create a board
> POST /boards

### Update a board
> PATCH boards/{id}

### Delete a board
> DELETE /boards/{id}

## Lists

### Get all lists in a board
> GET /boards/{id}/lists

### Get a list
> GET /lists/{id}

### Create a list
> POST /lists

### Update a board
> GET /lists/{id}

### Delete a board
> DELETE /lists/{id}

## Items
### Get all items in a list
> GET /lists/{id}/items

### Get an item
> GET /items/{id}

### Create an item
> POST /items

### Update an item
> GET /items/{id}

### Delete an item
> DELETE /items/{id}