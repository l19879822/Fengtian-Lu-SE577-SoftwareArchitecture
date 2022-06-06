## Project Strcuture
This project has two components: Client And Server. When client is click "Authentication" nav link, Server will send oAuth request to github to request authorization to access user github, once user login with his/her github username/password, the page will redirect to Authentication page in this app, and user profile information(name, email, bio, etc) and all the repo details(in the table format) will be displayed in the page. And once the user click "Logout" it will redirect to logout page and "Login with github" button will be presented again
For the repo details table, all the column values of "Title" is actually clickable and the page will be redirect to the repo details page displayed as following:

Repository Name: <Your repo name>
Clone URL: <Your Clone URL>
SSH URL: <Your SSH URL>
Visibility: <public/private>
Updated at: <last update date>

## Client ID and serect for authentication(required)
Before start this application, please create a .env file under the root directory of subproject "server" and configure the "CLIENT_ID" and "CLIENT_SECRET" which will be sent in the Drexel black board. Format as below:

CLIENT_ID = xxxxxxxxx
CLIENT_SECRET = xxxxxxxxx

## If you want to run app with docker
Both build.sh and run.sh are put under the root directorty of the project, 
1. run "build.sh" under root directory --> run "run.sh" under root directory 
2. launch localhost:8000

## If you want to run app through terminal without docker:
You need to open two seperate terminals: One for "client" submodule and one for "server" submodule. First, change directory to "server"(cd ./server) and run "npm install" and the run "npm start" command to start the server. Then, change directory to "client" and run "vue serve" to start the client. Then you could launch browser and enter "localhost:8080" to launch the application.

## Just be aware I set different port number for running app with/without docker and you could run this application through both approaches