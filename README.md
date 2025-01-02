# Todo

# Todo App Backend Service

This repository contains the backend service for a Todo application. The service is built using Node.js, Express, and Sequelize, and is containerized using Docker.

---

## Prerequisites

- Node.js (>=16.x)
- Docker
- MySQL (for local development)
- Postman or curl (for API testing)

---

## Running the Application Locally

### 1. Clone the Repository

git clone <repository-url>
cd <repository-folder>


### 2. Install Dependencies

npm install

### 3. Run MySQL Locally or Use Docker for Cloud DB


### 4. Start the Server

npm start


The application will be available at `http://localhost:3307`.
IT can be tested using Postman (Explained Below) in the section (## Using the API Endpoints)

---

## Running the Application with Docker

### 1. Build the Docker Image

docker build -t todo-app .


### 2. Run the Docker Container

docker run -p 3307:3307 --env-file .env todo-app


The application will be available at `http://localhost:3307`.

---

## Running the Tests

### 1. Setup the Test Database
Ensure a MySQL instance is running and the test database credentials match `.env`.

### 2. Run Tests

npm test

---

## Using the API Endpoints

### Base URL
```
http://localhost:3307
```

### Endpoints

#### 1. Add a Todo
- **Endpoint:** `/todos`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "title": "My new todo"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "My new todo",
    "createdAt": "2024-12-26T00:00:00.000Z",
    "updatedAt": "2024-12-26T00:00:00.000Z"
  }
  ```

#### 2. Edit a Todo
- **Endpoint:** `/todos/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "title": "Updated todo title"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Updated todo title",
    "createdAt": "2024-12-26T00:00:00.000Z",
    "updatedAt": "2024-12-26T00:00:00.000Z"
  }
  ```

#### 3. Delete a Todo
- **Endpoint:** `/todos/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "Item Deleted"
  }
  ```

---

## Notes
- Use Postman or curl to test API endpoints.

