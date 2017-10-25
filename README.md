## About the App

'Track your Trails' is a Single Page Application that allows a user to log in and track hikes they've gone on. A user is able to create hikes, update and delete hikes they've created, and view all hikes they've gone on.

## Link to Application

Track your Trails - https://rinathilm.github.io/project-2-fullstack-app/

## Wireframes

Link to wireframes - https://drive.google.com/file/d/0By5LPJuxCHaEektjOWNybS1fR1E/view?usp=sharing

## User Stories

- As a new user, I want to be able to sign-up and use this app
- As an existing user, I want to be able to sign-in, change my password, sign-out and use this app
- As a user, I want to be able to add hikes I've completed with some basic stats (how long it took, - elevation, miles, difficulty)
- As a user, I want to be able to see a complete list of hikes I've completed
- As a user, I would like to update and delete a hike I've completed

## API Info

- API github repo - https://github.com/rinathiLM/project-2-rails-api
- Deployed API (using Heroku) - https://rinas-fullstack-project.herokuapp.com/

## Technology

- HTML/CSS
- jQuery
- AJAX
- JavaScript
- Handlebars
- Bootstrap

## Development Process

Setting up the Rails API wasn't as difficult as I thought, especially since it was my first time. The more difficult and time-consuming portion was getting the data to display and updating the UI accordingly based on user actions. I incorporated bootstrap modals and navbar functionality that was hard to use at first, trying to get a form to submit was pretty difficult for instance (then getting the modal to disappear, then the modal backdrop to disappear, ... and so on.).

Although chanllenging, it was a good experience and I feel more equipped doing something similar in the future and utilizing bootstrap cabilities more freely.

## Issues & Future Enhancements

- After first hike is created, modal form still retains previous values
- Show message that no hikes have been inputted if user selects 'See all hikes'
- Implement navigation bar dropdown instead of bootstrap modals for login and change password
- Call a 3rd party API to get hike info to prepopulate based on hike name selected
