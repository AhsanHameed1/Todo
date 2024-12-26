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
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DB_NAME=<yourdbname>
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>
DB_HOST=<localhost  or your host url for a hosted database>
PORT=3307
```

### 4. Run MySQL Locally
Ensure a MySQL instance is running and the credentials match the `.env` file.

### 5. Start the Server
```bash
npm start
```

The application will be available at `http://localhost:3307`.

---

## Running the Application with Docker

### 1. Build the Docker Image
```bash
docker build -t todo-app .
```

### 2. Run the Docker Container
```bash
docker run -p 3307:3307 --env-file .env todo-app
```

The application will be available at `http://localhost:3307`.

---

## Running the Tests

### 1. Setup the Test Database
Ensure a MySQL instance is running and the test database credentials match `.env`.

### 2. Run Tests
```bash
npm test
```

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

- Replace `<repository-url>` with the URL of your GitHub repository.
- Ensure the MySQL database is properly set up and accessible before running the application.
- Use Postman or curl to test API endpoints.
