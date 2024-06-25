# Web Application with Express and React Next.js

This project is a web application with a backend written in Express and a frontend developed using React and Next.js. The backend utilizes Prisma for database interactions. The project was developed by a team of two, with responsibilities divided between backend (my responsibility) and frontend development. 

## Project Overview

The application is inspired by the IBM NLU parser, which is a natural language understanding tool that can parse text to identify entities, relationships, and other elements. Our application aims to allow users to manually correct mistakes made by the parser. However, due to project scope limitations, text and relationships are manually added instead of connecting to the parser's API.

## Project Roles

- **Backend Development:** Managed by me, including setting up Express and Prisma.
- **Frontend Development:** Managed by my colleague, involving the creation of the React and Next.js components.

## Features

- Authorization
- JWT Authentication
- Prisma ORM for database management

## Technologies Used

- Backend: Express.js, Prisma
- Frontend: React, Next.js
- JWT: For secure authentication
- Visual Studio Code

## Setup Instructions

### Prerequisites

- Install [Node.js](https://nodejs.org/)

## Setting Up the Database with Prisma

1. **Navigate to the backend folder:**
   cd backend

2. **Install Prisma CLI:**
   npm install @prisma/cli --save-dev

3. **Initialize Prisma:**
   npx prisma init

4. **Run the Prisma migration to create the tables in the database:**
   npx prisma migrate dev --name init

5. **Generate the Prisma client:**
   npx prisma generate

### Running the Backend

1. **Navigate to the backend folder:**
   cd backend

2. **Install dependencies:**
   npm install

3. **Set up the database with Prisma:**
   - Create a `.env` file in the backend folder with the following template and fill in the database URL. A JWT_SECRET has already been provided for convinience:
     ```
     DATABASE_URL=your_database_url
     JWT_EXPIRATION=1h
     JWT_SECRET=s0YiaMIG10fZKz8gVXUlTkjAhEbm3TCvhwKQUEDlX5bLom43WNChiNbFvI87uJr
     ```

4. **Run the backend:**
   npm start

### Running the Frontend

1. **Navigate to the frontend/frontend folder**
   cd frontend/frontend 

2. **Install dependencies:**
   npm install

3. **Run the frontend:**
   npm run dev

## Known Issues

- There are some bugs in the project causing errors to pop up when opening the app in the browser. These can be ignored.
- There are known bugs affecting the login/register functionality.

## Learning Objectives

The focus of this project was to gain experience in building applications using React, Express, and other associated modules. It provided hands-on experience with:

- Building RESTful APIs with Express
- Managing databases with Prisma
- Developing dynamic user interfaces with React and Next.js
- Implementing JWT for secure authentication

## Acknowledgements

This project draws inspiration from the IBM NLU parser. The IBM NLU parser is a tool that analyzes text to extract metadata, such as entities, keywords, categories, sentiment, and syntax. Although our project does not connect to the IBM NLU API, it emulates the idea by allowing manual input and correction of parsed data.