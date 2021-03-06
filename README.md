# Technical Test

## prerequisite

1. Install NodeJS and NPM: https://nodejs.org/en/
2. Install Angular-CLI: `npm install -g @angular/cli`

## Frontend Test

### Built with

* [NPM (6.0.1)](https://www.npmjs.com/) - Dependency Management.
* [Angular (6.0.2)](https://angular.io/) - A TypeScript-based open-source front-end web application platform.

### How to run it

* Clone the repository: `git clone https://github.com/JorgeChagui/Technical-Test-Condor.git`
* Move into the project location: `cd <project route>/FrontendTest/`
* Install dependencies: `npm i`
* Serve the app: `ng serve --open`
* The browser should automatically open on: `http://localhost:4200/`

## Backend Test

### Built with

* [NPM (6.0.1)](https://www.npmjs.com/) - Dependency Management.
* [NodeJS (v8.11.2)](https://nodejs.org/en/docs/) - Node.js is a JavaScript runtime
* [ExpressJS (4.16.0)](http://expressjs.com/) - The web framework used to make the Api REST
* [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js

### How to run it

* Clone the repository: `git clone https://github.com/JorgeChagui/Technical-Test-Condor.git`
* Move into the project location: `cd <project route>/BackendTest/`
* Install dependencies: `npm i`
* Serve the app: `npm start`

### Routes
The URI is: `http://localhost:3000/`

1. CREATE: `http://localhost:3000/providers/create`
    * HTTP Method: **POST**
    * This endpoint accepts a JSON with the following fields, "firstName", "lastName", "document" and "email" are **Required**:
    ```
    {
    "firstName": String,
    "lastName": String,
    "document": String,
    "email": String,
    "address": String,
    "city": String,
    "specialty": String of a valid ObjectId,
    "status": number
    }
    ```
2. READ: 
    * all: `http://localhost:3000/providers`
    * one: `http://localhost:3000/providers/:id`
    * HTTP Method: **GET**
3. UPDATE: `http://localhost:3000/providers/:id/update`
    * HTTP Method: **PUT**
    * This endpoint accepts a JSON with the following optional fields:
    ```
    {
    "firstName": String,
    "lastName": String,
    "document": String,
    "email": String,
    "address": String,
    "city": String,
    "specialty": String of a valid ObjectId,
    "status": number
    }
    ```
4. DELETE: `http://localhost:3000/providers/:id/delete`
* HTTP Method: **DELETE**


## Author

* **Jorge Chagüi** - [JorgeChagui](https://github.com/JorgeChagui)