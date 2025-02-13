# Library API

## Description

App in Nest to manage a library.

## Project Setup

```bash
$ npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following variables:

````plaintext
# Database Configuration
DB_HOST=your_database_host
DB_PORT=5432
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name

# Application Configuration
PORT=3000

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
````

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

#### Create Book

**POST** `/api/books`

**Request Body**

```json
{
  "name": "The Great Gatsby",
  "isbn": "978-3-16-148410-0"
}
```

**Response (201)**

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

**Response (400)**

```json
{
  "message": "Failed to create book",
  "error": "Bad Request",
  "statusCode": 400
}
```

#### Update Book

**PATCH** `/api/books`

**Request Body**

```json
{
  "name": "Updated Book Name",
  "isbn": "978-3-16-148410-1"
}
```

**Response (200)**

```json
{
  "id": 1,
  "name": "Updated Book Name",
  "isbn": "978-3-16-148410-1",
  "isDeleted": false,
  "deletedAt": null,
  "createdAt": "2023-11-15T10:00:00.000Z",
  "updatedAt": "2023-11-15T10:00:00.000Z"
}
```

**Response (400)**

```json
{
  "message": "Book with ID 1 not found",
  "error": "Not Found"
}
```

#### Search Book

**GET** `/api/books/search`

##### Query Parameters

**Query Parameters**

- query (string) - Search term

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

**Response (500)**

```json
{
  "message": "Failed to search books",
  "error": "Internal server error"
}
```

#### Delete Book

**DELETE** `/api/books/:id`

##### Query Parameters

**Query Parameters**

- id (path) - Book ID

**Response (200)**

```json
{
  "id": 1,
  "name": "The Great Gatsby",
  "isbn": "978-3-16-148410-0",
  "isDeleted": true,
  "deletedAt": "2023-11-15T10:00:00.000Z",
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
