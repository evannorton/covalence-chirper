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
  * /client
  * /server
    * /routes
      * index.js
      * chirps.js
    * server.js
    * chirpsstore.js (file provided in this lab)
* In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js
  * Import chirpsstore, and use it to read and write chirps to the json file
    * The json file will be created the first time you run successfully!
    * Remember to export your router with module.exports
* In routes/index.js, import the chirps router and add it to a new router
  * use app.use with the /chirps route to add to the root api router
  * Export the router
* In server.js, import the routes folder (./routes)
  * add the api router to the express app with the path /api
* Test all of your methods using Postman (https://www.getpostman.com/)

## Advanced

* Create an index.html, styles.css, and app.js file in the client folder
  * Code an app that uses jQuery to call your API and displays chirps
    * Create a form that lets you create new chirps
      * Do not use a form submit (you only need the inputs and not necesarily a form!)
      * Use a button click event to call the API
    * Add an x next to chirps that will delete them when clicked
    * When a chirp is clicked, popup a modal that lets you edit the chirp
* Remember to use express.static middleware!
* **HINT:** jQuery functions for calling APIs: $.ajax, $.get, $.post

# Chirper (Full Stack)

In this lab, you will combine two concepts:

* Building and serving an API using Express
* Building a ReactJS front-end that consumes that API
You'll need to combine these two concepts into one project folder.

## API

Your API should already be completed. Bring it into this project, making sure to observe the project structure discussed in lecture. Transition to using ES6 import/export syntax.

## Front-End

Create a ReactJS front-end, observing the project structure discussed in lecture. The front-end should have a router that shows a list of chirps as the main page. There should be a form for creating a new chirp. Use an onClick event on the button to submit a POST request to your api using the fetch API.

Each chirp should contain a button that says See Details. When that button is clicked, you should go to a page that specializes in displaying info for a single chirp.

On the page for a single chirp, you should make a GET request for the specific chirp. Display the chirp information on the page. Have an X button on the page that will trigger a DELETE request to the API for that chirp. Send the user back to the main page when the chirp is successfully deleted. You should also have an Edit link that will send the user to a page that specializes in editing a single chirp.

On the page for editing a single chirp, you should have a form that is prefilled with the current value of the chirp data. The user should be able to make changes and then click an update button to trigger a PUT request to the API for that chirp. When the update is successful, send the user back to the main page.

## Hints

* Use the Fetch API in your front-end code for making all your API requests (GET, POST, PUT, DELETE)
  * see MDN, specifically "Uploading JSON Data" in the "Making Fetch Requests" section
* You will find front-end route params and this.props.match.params to be useful in this lab
* Recommended front-end paths are as follows:
  * / for the main page that displays the list of chirps and a form
  * /chirp/:id/edit for the page that displays a chirp edit form
  * /chirp/:id for the page that displays a single chirp
* Any component that is presented by the Router (e.g. your "pages") will have access to this.props.history. This is necessary to kick off navigation from your code. (in response to something being completed, etc.)
  * this.props.history.push('/something') allows you to navigate to the page that responds to the path /something
  * this.props.history.replace('/something') can be used to navigate to that path, but not keep a record of where we currently are (we are replacing the current browser history entry, with this new page we are going to. This is useful if we don't want someone to be able to click the back button and return to this page)
  * this.props.history.goBack() can be used to navigate back one page in the browser history
