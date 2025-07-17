# Zigtask API

Zigtask API is a NestJS-based backend service for managing users, authentication, and tasks. It uses MongoDB for data storage and JWT for authentication. The project is designed to work with a separate frontend client.

## Features

- User registration and authentication (JWT)
- Task management (CRUD)
- Global error handling and response formatting
- Swagger API documentation

## Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB running locally

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/zigtask-api.git
   cd zigtask-api
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and add:
   ```
  PORT = 3000
  FE_URL = http://localhost:3001

  MONGODB_URI = mongodb+srv://zigtask:leovmika68@cluster0.pvq1yfv.mongodb.net/zigtask?retryWrites=true&w=majority

  JWT_SECRET = 430978f3c126bf1c6cac04fbe4e2a06f
   ```

4. **Start the server:**
   ```sh
   npm run start
   ```

5. ** Set up database
  - Connect Cluser Mongo with Mongo Compass
  - Install MongoDB Community Edition: https://www.mongodb.com/try/download/community
   - Start MongoDB locally (default URI: `mongodb+srv://zigtask:leovmika68@cluster0.pvq1yfv.mongodb.net/zigtask?retryWrites=true&w=majority`)
  - Update your `.env` file with the local URI.

6. **Access Swagger API docs:**
   Visit [http://localhost:3000/api](http://localhost:3000/api) for interactive API documentation.

## Usage

- The API will be available at `http://localhost:3000`.
- Make sure your frontend client is configured to use this backend URL.

## License
