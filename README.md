# My Blog App

A full-stack blog application built with React.js and Node.js, featuring user authentication, post management, and image uploads.

## Features

- User authentication (register/login)
- Create, read, update, and delete blog posts
- Image upload functionality
- Category management
- Responsive design
- User profiles

## Tech Stack

### Frontend

- React.js 18.3.1
- React Router DOM 6.28.0
- Axios for API requests
- SweetAlert2 for notifications

### Backend

- Node.js with Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- Multer for file uploads
- dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd my-blog
```

2. Install API dependencies

```bash
cd api
npm install
```

3. Configure environment variables
   Create a `.env` file in the api directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

4. Install Client dependencies

```bash
cd ../client
npm install
```

### Running the Application

1. Start the API server

```bash
cd api
npm start
```

The server will run on http://localhost:5000

2. Start the React client

```bash
cd client
npm start
```

The client will run on http://localhost:3000

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - User login

### Posts

- GET `/api/posts` - Get all posts
- POST `/api/posts` - Create a new post
- PUT `/api/posts/:id` - Update a post
- DELETE `/api/posts/:id` - Delete a post

### Categories

- GET `/api/categories` - Get all categories
- POST `/api/categories` - Create a new category

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License
