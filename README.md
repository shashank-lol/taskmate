# Task Mate

Task Mate is a web application designed to enhance team project and task management by ensuring proper task assignment, asset management, and deadline tracking. The platform leverages modern web technologies to provide an intuitive and efficient solution for organizing and monitoring tasks.

## Features
- **Task Assignment:** Assign tasks to team members along with relevant assets and deadlines.
- **Kanban Board System:** Visualize and manage tasks effectively with an interactive Kanban board, boosting project efficiency by at least 25%.
- **Progress Tracking:** Monitor the progress of tasks and projects in real time.
- **User Management:** Securely manage user accounts and roles.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Express.js, Node.js
- **Database:** MySQL

## Installation

### Prerequisites
- Node.js and npm installed
- MySQL server installed and running

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-mate.git
   cd task-mate
   ```

2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```

3. Configure the database:
   - Create a MySQL database named `task_mate`.
   - Update the database credentials in the backend configuration file (e.g., `.env`):
     ```
     DB_HOST=your-database-host
     DB_USER=your-database-username
     DB_PASSWORD=your-database-password
     DB_NAME=task_mate
     ```

4. Run the application:
   - Start the backend server:
     ```bash
     npm run server
     ```
   - Start the frontend development server:
     ```bash
     cd client
     npm start
     ```

5. Open the application:
   Navigate to `http://localhost:3000` in your web browser.

## Usage
- Log in or sign up to create an account.
- Create a new project and add tasks to it.
- Assign tasks to team members and set deadlines.
- Use the Kanban board to manage task progress.

