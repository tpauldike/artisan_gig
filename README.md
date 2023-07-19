# ArtisanGig
![artisan_gig_landing_page](https://github.com/tpauldike/rough_work/blob/main/designs/ArtisanGig_mockup.jpg)
ArtisanGig is a web app that enables users to connect with local artisans to get the services they need. It allows artisans to register their artwork(s) and lets the users send feedback and ratings for the service received.

## Technology Stack

**Frontend**
- HTML 
- CSS 
- JavaScript

**Backend**
- Express.js

**Database**
- MySQL

## The Team
ArtisanGig was built by a team of three colleagues, who were at the finish line of the ALX SE 9 months foundations; the name and roles of the team members were as follows:

Name | Role 
---- | ----
[Moses Isang](https://github.com/Mohzis1) | front end development (structure & styling), presentation
[Jerome Udoh](https://github.com/Jubasstech) | architectural structure, documentation, back end development
[Topman Paul-Dike](https://github.com/tpauldike) | database schema/design, APIs, documentation, deployment.

## APIs

### User

* `/user/sign_up`: This API is used for user sign up.
* `/user/sign_in`: This API is used for user authentication and sign in.
* `/user/delete`: This API is used to delete user account

### Artwork 

* `/artwork/create`: This API is used to create artwork by providing information such as the category of the artwork, description, and artisan credentials..
* `/artwork/update`: This API is used to update any artwork initially created.
* `/artwork/delete`: This API is used to delete any artwork initially created.
* `/artwork/categories`: This API is used to view all categories of artisans available on the app.
* `/artwork/artworks`: This API is used to view artworks registered under the various categories and reviews. 

### Feedback
`/feedback`: This API is used to send feedback aand ratings 

## Installation

To install and run the app locally:
- git clone the repo
- run npm install
- have a .env file with the needed credentials to connect to MySQL (do this on the server side)
- Have MySQL installed on your localhost
- Then run the app on your local server, frontend or port 5000 and backend on port 3000, or use Postman to interact with the APIs directly.

## Deployment

The app is hosted on Vercel but still getting fixed and not launched yet

## Contributing

Please read [CONTRIBUTION.md](./CONTRIBUTION.md) for details on our code of conduct, and the process for submitting pull requests.

## Support

For any help and support, please contact [me](mailto:topman4loveworld@gmail.com).
