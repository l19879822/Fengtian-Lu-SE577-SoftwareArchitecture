# fengtian-lu-se577

Repositorty for learning SE-577 Software Architecture

## Project Strcuture

This project has two components: Client And Server. When client is click "Authentication" nav link, Server will send oAuth request to github to request authorization to access user github, once user login with his/her github username/password, the page will redirect to Authentication page in this app, and user profile information(name, email, bio, etc) and all the repo details(in the table format) will be displayed in the page. And once the user click "Logout" it will redirect to logout page and "Login with github" button will be presented again

## run docker
run "build.sh" under root directory --> run "run.sh" under root directory --> launch localhost:8080