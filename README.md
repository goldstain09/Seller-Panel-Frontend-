Project Name - "ECOMMERCE's Seller Panel"

Live Demo - https://seller-panel-project.onrender.com/

Test Users OR Seller - [
    Email - weirdonz@gmail.com
    Password - sujal2004

    Email - singhania@565gmail.com
    Password - sujal2004
]


Frontend (ReactJS):

Description:
The Seller Panel of our e-commerce platform is a robust tool designed to empower sellers in efficiently managing their products and orders. Developed using React, this panel streamlines order handling, providing sellers with a seamless experience.

Key Features:
Efficient Order Handling:
Sellers can efficiently manage and process orders, ensuring a streamlined and organized workflow.

Product Management:
Easily add, update, or remove products, giving sellers full control over their inventory.

Order Tracking:
Sellers have real-time visibility into order statuses, enhancing transparency and facilitating quick responses.

Intuitive Interface:
The Seller Panel features an intuitive interface, making it user-friendly and accessible for sellers of all levels.

Installation & Usage Steps:
cd seller-panel
npm install
npm start

but before this you need to start backend server OR
create build by using "npm run build", and set it in backend's /build;

Folder Structure:
└── /src
├── /components- Contains reusable React components, Pages and their corresponding SCSS files.
| ├──/SCSS- Holds SCSS files for styling.
| | ├──Component1.scss
| | ├──Component2.scss
| | └── ...
│ ├── Component1.jsx
│ ├── Component2.jsx
│ └── ...
├── /media- Stores main images and logos used in the application.
│ ├── image1.jpg
│ ├── image2.png
│ └── ...
├── /redux- Manages state using Redux and Redux Saga.
│ ├── actions- Contains Redux action creators.
│ ├── constants- Defines action types and constants.
│ ├── reducers- Implements Redux reducers.
│ ├── sagas- Manages Redux Sagas for asynchronous actions.
│ ├── services- Contains service files for API interactions.
│ └── store.js- Configures the Redux store.
├── index.js- Main entry point for React application.
└── router.js- Manages all routes within application.

Technologies used (Frontend)

- React
- React-Redux
- Redux Saga {Toolkit}
- React Router Dom
- Bootstrap
- Axios
- SCSS

Dependencies:
"axios": "^1.6.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-redux": "^8.1.3",
"react-router-dom": "^6.17.0",
"react-scripts": "5.0.1",
"react-spinners": "^0.13.8",
"redux": "^4.2.1",
"redux-saga": "^1.2.3",
"sass": "^1.69.5"
"react-toastify": "^9.1.3",
