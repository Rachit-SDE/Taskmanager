# TaskManager

TaskManager is a full-stack web application for managing personal and team tasks efficiently. It features user authentication, task CRUD operations, filtering, and a modern UI built with Next.js and Tailwind CSS.


![alt text](<Screenshot 2025-06-16 113931.png>)


## Features
- User registration, login, and authentication
- Email verification and password reset
- Create, read, update, and delete tasks
- Task filtering by priority and status
- Task completion tracking
- Admin and creator roles for user management
- Responsive, modern UI

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT, bcrypt, cookies
- **Email:** Nodemailer, Handlebars

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Environment Variables
Create a `.env` file in `backend/` with:
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

### Installation
1. **Clone the repository:**
   ```powershell
   git clone <repo-url>
   cd Taskmanager
   ```
2. **Install backend dependencies:**
   ```powershell
   cd backend
   npm install
   ```
3. **Install frontend dependencies:**
   ```powershell
   cd ../client
   npm install
   ```

### Running the App
- **Start the backend:**
  ```powershell
  cd backend
  npm start
  ```
- **Start the frontend:**
  ```powershell
  cd ../client
  npm run dev
  ```
- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
- `backend/` - Express API, authentication, MongoDB models, routes
- `client/` - Next.js frontend, React components, context, hooks

## API Endpoints
- `POST /api/v1/register` - Register user
- `POST /api/v1/login` - Login user
- `GET /api/v1/tasks` - Get all tasks (auth required)
- `POST /api/v1/task/create` - Create task (auth required)
- `PATCH /api/v1/task/:id` - Update task (auth required)
- `DELETE /api/v1/task/:id` - Delete task (auth required)

## License
MIT
