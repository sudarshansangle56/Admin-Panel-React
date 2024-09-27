# Admin Panel with User Management and Analytics

This project is a React-based Admin Panel for managing users and visualizing registration trends. It features user management (CRUD operations) and analytics using React, Bootstrap, and Chart.js, with JSON Server simulating the backend.

## Objective

Create a responsive admin interface for managing users and visualizing registration trends.
![Screenshot 2024-09-27 215406](https://github.com/user-attachments/assets/334c4725-3e4b-40d5-aa5d-c51da81cd65d)

## Features

- **User Management**
  - View user list with name, email, and role.
  - Search and sort users by any field.
  - Perform Create, Read, Update, and Delete operations.
  - Confirmation prompt before deleting a user.

- **Analytics Dashboard**
  - Display registration metrics for various time frames.
  - Graphical representation of trends using Chart.js.

## Technologies Used

- **Frontend**: 
  - React.js
  - Bootstrap
  - Chart.js
  - Axios
  
- **Backend Simulation**: 
  - JSON Server

## Getting Started

### Prerequisites

Ensure you have:

- NPM (Node Package Manager)
- JSON Server (install globally with the following command):

```bash
git clone https://github.com/sudarshansangle56/Admin-Panel-React.git
cd Admin-Panel-React
npm install

npm install -g json-server
json-server --watch db.json --port 3000

npm start

Open your browser and navigate to http://localhost:3000.
