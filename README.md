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

## Tasks
### Get all tasks in a list
> GET /lists/{id}/tasks

### Get an item
> GET /tasks/{id}

### Create an item
> POST /tasks

### Update an item
> GET /tasks/{id}

### Delete an item
> DELETE /tasks/{id}

## Checklists
### Get all checklists in an task
> GET /tasks/{id}/checklists

### Get a checklist
> GET /checklists/{id}

### Create a checklist
> POST /checklists

### Update a checklist
> GET /checklists/{id}

### Delete a checklist
> DELETE /checklists/{id}

## Checklist Items
### Get all items in a checklist
> GET /checklists/{id}/items

### Add an item to a checklist
> POST /checklists/{id}/items

### Update an item
> GET /items/{id}

### Delete an item
> DELETE /items/{id}