
<h1 align="center"> :blue_book: My-Diary :pencil: </h1>

> <h3 align="center">MyDiary is an online journal where users can pen down their thoughts and feelings.</h3>

> <h3 align="center">This was Andela Bootcamp Challenge that i did in october 2019.</h3>
> 
# Table of Contents
* [Live Link](#live-link-globe_with_meridians)
* [Features](#features-rocket)
* [API Endpoints](#api-endpoints-droplet)
* [Technologies Stack](#technologies-stack-gear)
* [Author](#author-computer)
* [Bugs](#bugs-bug)
* [Acknowledgments](#acknowledgments-bow)

# Live Link :globe_with_meridians:

My-Diary is hosted on gh-pages [my-diary]:(https://github.com/UwimanaMuhiziElie/My-diary).

# Features :rocket:

- View all entries
- View a specific entry
- User can a modify an entry
- User can delete an entry
- User can create an account
- User can create an entry
- User can sign in

# API Endpoints :droplet:

*HTTP Method*|*End point* | *Public Access*|*Action*
:----------|:---------|:------------:|:-----
POST | /v1/auth/signup | true | Create a user in the API
POST | /v1/auth/signin | true | User can sign in the API
POST | /v1/entries | true | Create an entry
PATCH | /v1/entries/<entryId> | true | Modify a specifc entry
DELETE | /v1/entries/<entryId> | true | Delete an entry
GET | /v1/entries/ | true | Fetch all entries
GET | /v1/entries/<entryId> | true | Fetch a specific entry

  
  #### UI
 - Navigate to UI/html folder `cd Front_End/html`
 - These are HTML and CSS based pages that can be run directly in your browser.
  
  #### Server
  
 - Install the project dependencies `npm install`
 - Launch the server `npm start`
  
# Technologies Stack :gear:
| Frontend-UI | Backend-API    |
| ---------   | -----------    |
| HTML        | Nodejs/Express |
| CSS         | Mocha          |
| JS          | Travis-ci??    |
  
# Bugs :bug:
No known bugs.
If you spot one, kindly email me @ umuhizielie01@gmail.com
  
# Author :computer:
  [Elie Uwimana](https://github.com/UwimanaMuhiziElie)
  
 # Acknowledgments :bow:
[Andela Rwanda](https://www.andela.com)
