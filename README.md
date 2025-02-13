# Library API

## Description

App in Nest to manage a library.

## Project Setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dependencies

### Main Dependencies

```json
{
  "@nestjs/common": "^10.0.0",
  "@nestjs/config": "^3.1.1",
  "@nestjs/core": "^10.0.0",
  "@nestjs/platform-express": "^10.0.0",
  "@nestjs/typeorm": "^10.0.1",
  "class-validator": "^0.14.1",
  "pg": "^8.11.3",
  "typeorm": "^0.3.17"
}
```

### Available Endpoints

#### Books API

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/books`        | Get all books                |
| GET    | `/api/books/:id`    | Get a book by ID             |
| POST   | `/api/books`        | Create a new book            |
| PATCH  | `/api/books/:id`    | Update a book                |
| GET    | `/api/books/search` | Search books by name or ISBN |
| DELETE | `/api/books/:id`    | Soft delete a book           |

### Detailed API Documentation

#### Get All Books

**GET** `/api/books`

**Response (200)**

```json
[
  {
    "id": 1,
    "name": "The Great Gatsby",
    "isbn": "978-3-16-148410-0",
    "isDeleted": false,
    "deletedAt": null,
    "createdAt": "2023-11-15T10:00:00.000Z",
    "updatedAt": "2023-11-15T10:00:00.000Z"
  }
]
```

#### Get Book by ID

**GET** `/api/books/:id`

**Parameters**

- `id` (path) - Book ID

**Response (200)**

```json
{
  "id": 1,
  "name": "The Great Gatsby",
  "isbn": "978-3-16-148410-0",
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2023-11-15T10:00:00.000Z",
  "updatedAt": "2023-11-15T10:00:00.000Z"
}
```

**Response (404)**

```json
{
  "message": "Book with ID 1 not found",
  "error": "Not Found"
}
```
