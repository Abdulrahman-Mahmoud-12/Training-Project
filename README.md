# Registration Portal

## Short Description
The Registration Portal is a simple web application that allows users to register their details and view a list of all registered users. It features a welcoming home page, a user registration form with client-side validation, and a dynamic table displaying user information fetched from a SQLite database.

## Features
* **User Registration**: Allows new users to sign up by providing their personal details.
* **Client-Side Validation**: Ensures data integrity with real-time validation for form fields like name length, phone format, email format, password complexity, and date of birth.
* **User Data Persistence**: Stores registered user information in a SQLite database.
* **View Registered Users**: Displays a comprehensive list of all registered users in a tabular format.
* **Responsive Navigation**: A consistent navigation bar across all pages.
* **Keyboard Shortcuts**: Navigate between pages using `Alt + R` for Register, `Alt + V` for View Users, and `Alt + W` or `Alt + H` for Welcome page.

## Installation Instructions

To set up and run this project locally, follow these steps:

1.  **Clone the repository (or download the files):**
    ```bash
    git clone https://github.com/Abdulrahman-Mahmoud-12/Training-Project.git
    cd Registration-Portal
    ```

2.  **Install Node.js and npm:**
    If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/). npm (Node Package Manager) is included with Node.js.

3.  **Install dependencies:**
    Navigate to the project's root directory in your terminal and install the required Node.js packages:
    ```bash
    npm install express ejs sqlite3
    ```

4.  **Database Setup:**
    The application uses a SQLite database. A `database.db` file will be automatically created in the project's root directory upon the first run of `server.js` if it doesn't already exist. The `users` table will also be created automatically.

## Usage

To start the application, navigate to the project's root directory in your terminal and run the server:

```bash
node server.js
