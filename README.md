# MERN-AMAZONA

# Lessons-

1. Introduction
2. Tools
3. Create react application
4. Create git repository
5. Add Products
6. Add routing
   1. npm i react-router-dom
   2. create route for homescreen
   3. create route for product screen
      //Note - (use of <Link> instead of <a> to execute SPA, use of :slug in path)
7. Add NodeJS Server
   1. run npm init in run folder
   2. update package.json and set type:module
   3. add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route / for return backend is ready.
   9. move projects.js from frontend to backend.
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products from Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
      //Note - (localhost port was set to 3001 for resolving error 431 axios)
9. Manage state by Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from useReducer
10. Add bootstrap UI framework
    1. npm i react-bootstrap bootstrap
    2. update App.js and index.js
11. Create product and rating component
    1. create rating component
    2. create product component
    3. use rating component in product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
       //Note - (added the favicon in index.html)
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
