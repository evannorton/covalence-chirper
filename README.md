# Chirper (Front End)
In this lab, you will be building your first front-end application using ReactJS. 

It's called Chirper, a platform where you can post short messages on the internet for all the world -- even the Presidents of the United States -- to see!

## Prerequisites
0. Watch the "Introduction to React" videos available to you at Covalence. Rewatch them where necessary.
1. Install Create React App on your local machine.
2. Use Create React App to create your first React application.
3. Install the React Developer Tools in Chrome.
4. Import Bootstrap 4 into your index.html file.

## Instructions 
Your objective should be to create a "timeline" of Chirps -- short messages that you post on the Chirper platform. 

Your timeline should load with at least three chirps, and your users need the capability of posting new Chirps, which will be displayed back to them in the timeline once they are posted. 

***Design constraint:*** You can only invoke `ReactDOM.render()` **one time** in your entire application.

## Getting Started
Familiarize yourself with your new React application, but quickly move into separating components into their own directory. 
Remember: one component per file! 

Convert your `.js` files into `.jsx` files.

Use only Bootstrap classes. You should not need any custom CSS in this project.

Think about the design of your project. How will you compose (or extract) components to achieve the desired result?

Happy Hacking!

# Chirper (Back End)

## Required

* Setup an API with the project structure like:
** /client
** /server
*** /routes/
*** /routes/chirps.js
...*index.js
*** server.js
*** chirpsstore.js (file provided in this lab)
* In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js
** Import chirpsstore, and use it to read and write chirps to the json file
*** The json file will be created the first time you run successfully!
*** Remember to export your router with module.exports
* In routes/index.js, import the chirps router and add it to a new router
** use app.use with the /chirps route to add to the root api router
** Export the router
* In server.js, import the routes folder (./routes)
** add the api router to the express app with the path /api
* Test all of your methods using Postman (https://www.getpostman.com/)

## Advanced

* Create an index.html, styles.css, and app.js file in the client folder
** Code an app that uses jQuery to call your API and displays chirps
*** Create a form that lets you create new chirps
*** Do not use a form submit (you only need the inputs and not necesarily a form!)
*** Use a button click event to call the API
*** Add an x next to chirps that will delete them when clicked
*** When a chirp is clicked, popup a modal that lets you edit the chirp
* Remember to use express.static middleware!
* **HINT:** jQuery functions for calling APIs: $.ajax, $.get, $.post
