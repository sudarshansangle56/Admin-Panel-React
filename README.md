# Admin Panel with User Management and Analytics

 
This project is a React-based Admin Panel that allows for user management (CRUD operations) and provides analytics on user registration trends. The frontend is built using React and Bootstrap, with Chart.js for data visualization. JSON Server is used to simulate a backend for handling API requests using the provided db.json.

Objective
The objective of this project is to create a responsive admin interface that allows admins to manage users and visualize registration trends over various time frames.

Features
User Management
Display User List: View all users with their name, email, and role.
Search & Sort: Search users by any field (name, email, etc.) and sort by different attributes.
CRUD Operations: Perform Create, Read, Update, and Delete operations on users.
Confirmation Prompt: Ensure confirmation before deleting any user.
Analytics Dashboard
User Registration Metrics: Display registration metrics for the last 24 hours, 7 days, 15 days, and 30 days.
Data Visualization: Graphical representation of user registration trends using Chart.js.

Technologies Used
Frontend
React.js: A JavaScript library for building user interfaces.
Bootstrap: A popular CSS framework for responsive web design.
Chart.js: A charting library to create interactive charts.
Axios: For making HTTP requests to the JSON server.
Backend Simulation
JSON Server: A tool used to create a simple backend API for performing CRUD operations.
Getting Started
Prerequisites
Ensure you have the following installed:

![Screenshot 2024-09-27 210606](https://github.com/user-attachments/assets/ae75a634-6cef-4327-9878-8bce879a3cb1)

NPM (Node Package Manager)
JSON Server (Install globally using npm install -g json-server)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sudarshansangle56/Admin-Panel-React.git
cd Admin-Panel-React
Install frontend dependencies:

bash
Copy code
npm install
Set up the backend:

Download the db.json file from the link provided.
Place the db.json file in the root of your project.
Run JSON Server:


Copy code
json-server --watch db.json --port 3000
Run the React frontend:


Copy code
npm start
Open your browser and navigate to http://localhost:3000 to interact with the API.

GET /users – Fetch all users
POST /users – Add a new user
PUT /users/
– Update an existing user
DELETE /users/
– Delete a user
Assumptions
User roles are predefined (e.g., admin, user).
Basic error handling is in place for API calls (e.g., failed requests).
User analytics are based on registration timestamps present in the db.json.


Usage
User Management
Add User: Fill out the form with name, email, and role, then submit to create a new user.
Edit User: Click on a user to view details, then edit and save changes.
Delete User: Click the delete icon to remove a user (with confirmation).
Analytics Dashboard
User Registration Metrics: View registration statistics in real-time for the last 24 hours, 7 days, 15 days, and 30 days.
Charts: Interactive charts display user registration trends over time.

Challenges Faced
Responsive Design: Ensuring the admin panel is fully responsive across different devices was a challenge, especially with tables and charts.
API Handling: Handling CRUD operations with JSON Server required careful management of state and data consistency.
Data Visualization: Implementing meaningful and interactive charts using Chart.js for real-time analytics was crucial for the project.

Contact
For any queries or contributions, feel free to reach out:
GitHub: sudarshansangle56
