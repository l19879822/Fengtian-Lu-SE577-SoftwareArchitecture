## Install all dependencies needed especailly "@quasar/dotenv" extension to read the .env file to get the git access token.(@quasar/dotenv extension has been configured in the package.json)

npm install

## Then please create a .env file and put in the top (root) project directory, and this .env file should have one line and look like:

## The token below is a fake access token, I have submitted it to in the drexel blackboard for "Course Project - Deliverable 5"

GITHUB_ACCESS_TOKEN = ghp_XXXXXXXXX

## start the application

quasar dev

### If by any change But just in case by any chance npm install doesn't install @quasar/dotenv extension, there is another approach to install it.

## run quasar ext add @quasar/dotenv and then just "Enter or Y(Yes)" for all steps and it will suggest you to create and .env file in the root directory

quasar ext add @quasar/dotenv

## then the rest of the steps should be the same, just put the GITHUB_ACCESS_TOKEN = ghp_XXXXXXXXX that I submitted in the blackboard in the .env file and run quasar dev to start the application

For the response of GistReponse.vue. Based on the assignment requirement, I created a helloworld file and write 3 lines of printing helloworld in java. When "Github Gist Display" link is clicked it will make a asychronized call to get the content helloworld file and display it on the page
