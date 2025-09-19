# React Advanced Assignment - Interactive User Dashboard

This project is a responsive, single-page application built with React and Ant Design. It displays a grid of user profiles with interactive features like liking, editing, and deleting. This was developed as the advanced part of a frontend developer screening assignment, focusing on state management and integration with a component library.

### [View Live Demo](https://simplyfi-assignment-2-cot8vss7b-alapatis-projects.vercel.app/)

---

## Screenshot

---

## Features

- **All features from the basic assignment.**
- **Responsive Design**: The layout adapts seamlessly to mobile, tablet, and desktop screens using Ant Design's grid system.
- **Interactive Cards**: Each user card includes actions:
  - **Like**: Toggle a "liked" state with visual feedback.
  - **Edit**: Open a modal with a form to update user information.
  - **Delete**: Remove a user card from the view.
- **Advanced State Management**: Utilizes the React Context API to manage and provide user data and actions throughout the application, avoiding prop drilling.
- **Modern UI**: Built entirely with the Ant Design component library for a polished and consistent user experience.

---

## Technologies Used

- **React**: Core library, including `useState`, `useEffect`, and the **Context API**.
- **Ant Design**: UI library for all components (Grid, Card, Modal, Form, Icons).
- **JavaScript (ES6+)**: Language used for the application logic.
- **APIs**:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) for user data.
  - [DiceBear Avatars](https://avatars.dicebear.com/) for generating avatars.

---

## Local Setup and Installation

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3.  **Install dependencies (including Ant Design):**

    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.
