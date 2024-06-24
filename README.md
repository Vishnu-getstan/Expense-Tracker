# Expense Tracker

Welcome to the Expense Tracker repository! This project is a simple yet powerful application designed to help you manage and track your expenses efficiently. The Expense Tracker allows users to add, edit, delete, and categorize expenses, providing a clear overview of their financial activities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure login and registration functionality to protect your financial data.
- **Expense Management**: Add, edit, and delete expenses with ease.
- **Categorization**: Organize expenses into categories (e.g., Food, Transport, Utilities) for better tracking.
- **Visualization**: Interactive charts and graphs to visualize spending patterns and trends.
- **Reporting**: Generate reports based on date ranges and categories.
- **Responsive Design**: A mobile-friendly design that ensures usability on various devices.
- **Data Export**: Export expense data to CSV for offline analysis.

## Tech Stack

- **Frontend**: Built with React.js and styled-components for a modern and responsive UI.
- **Backend**: Powered by Node.js and Express.js to handle server-side logic and APIs.
- **Database**: MongoDB for secure and scalable data storage.
- **Authentication**: JSON Web Tokens (JWT) for secure user authentication.
- **Charts**: Chart.js for creating interactive charts and graphs.
- **Deployment**: Deployed on Heroku with continuous integration and deployment via GitHub Actions.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/expense-tracker.git
    cd expense-tracker
    ```

2. **Install dependencies**
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `backend` directory and add the following:

    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the application**
    ```bash
    # For backend
    cd backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

5. **Access the application**

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. **Register an Account**
    - Navigate to the registration page and create a new account.
2. **Log In**
    - Log in using your registered credentials.
3. **Add Expenses**
    - Use the dashboard to add, edit, or delete expenses.
4. **View Charts and Reports**
    - Visualize your spending patterns with interactive charts.
5. **Export Data**
    - Export your expense data to CSV for offline analysis.

## Contributing

We welcome contributions to improve the Expense Tracker. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to open an issue or contact the repository owner at [your-email@example.com](mailto:your-email@example.com).
