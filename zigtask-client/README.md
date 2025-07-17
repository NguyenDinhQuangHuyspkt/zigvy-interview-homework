# ZigTask Client

ZigTask Client is a React + TypeScript web application for managing tasks, designed to work with the ZigTask NestJS backend API. It features user authentication, task creation, editing, deletion, and filtering, with a clean UI built using Ant Design and Tailwind CSS.

## Features

- **Authentication:** Sign up and sign in with email and password. JWT tokens are stored securely in cookies.
- **Task Dashboard:** View tasks grouped by status ("To Do", "In Progress", "Done"). Update status with immediate UI feedback.
- **Task Management:** Create, edit, and delete tasks. Tasks include title, description, due date, and status.
- **Search & Filter:** Real-time search by title and filter tasks by date range.
- **Responsive UI:** Built with Tailwind CSS and Ant Design for a modern, responsive experience.
- **Notifications:** Success and error toasts for user feedback.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env` and set `REACT_APP_URL_SERVER` to your backend API URL (default: `http://localhost:3000`).

3. **Run the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```

4. **Access the app:**
   - Open [http://localhost:3001](http://localhost:3001) in your browser.

## Project Structure

- `src/pages`: Main pages (Home, Register, Main, Auth).
- `src/features`: Reusable UI features (forms, modals, task dashboard).
- `src/services`: API service layer for authentication and tasks.
- `src/components`: Task components and types.
- `src/utils`: Utility functions (toast notifications, auth helpers).

## Technologies Used

- React 19 + TypeScript
- Ant Design
- Tailwind CSS
- Formik & Yup (form handling & validation)
- Axios (API requests)
- React Router v7

## Notes

- Requires ZigTask API backend running at the URL specified in `.env`.
- JWT tokens are managed via cookies for secure authentication.
- All API errors and network issues are handled with user-friendly toasts.

---