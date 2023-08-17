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
* `/user/delete`: This API is used to delete user account alongside all data belonging to the user.
* `/user/update`: This API is used to update the information of the user, but the email.

### Artwork 

* `/artworks/`: This API is used to `create` artwork by providing information such as the category of the artwork, description, and artisan credentials..
* `/artworks/:artwork_id`: This API is used to `update` any artwork initially created.
* `/artworks/:artwork_id`: This API is used to `retrieve` info about an existing artwork.
* `/artworks/:artwork_id`: This API is used to `delete` an artwork initially created.
* `/artworks/category`: This API is used to view all artworks available in the category of choice.
* `/artworks/all`: This API is used to view all the artworks registered.

### Feedback
`/feedback`: This API is used to send feedback and ratings 

## Usage/Installation
*Firstly, beware that the web pages are not mobile responsive*

To use the app or to see how it works, simply visit the website https://artisangig.vercel.app, sign up and sign in.
However, if you are a developer and will like to run the app on your computer, locally. Follow the instruction below:

To install and run the app locally:
- git clone the repo
- navigate into the server-side folder, `cd server-side`
- run `npm install`
- Have MySQL installed on your localhost and copy & paste the commands in [artisan_gig.sql](./server-side/artisan_gig.sql) in your MySQL.
- have a `.env` file with the needed credentials to connect to MySQL (do this on the server side)
- Then run the app on your local server, frontend or port 5000 and backend on port 4001, or use Postman to interact with the APIs directly.

## Deployment

The frontend and the APIs are hosted on Vercel, while the database is hosted on clever-cloud, and they are all connected.

## Contributing

Please read [CONTRIBUTION.md](./CONTRIBUTION.md) for details on our code of conduct, and the process for submitting pull requests.

## Support

For any help and support, please contact [me](mailto:topman4loveworld@gmail.com).
