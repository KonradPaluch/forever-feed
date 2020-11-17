# Infinite Scroll by Konrad Paluch
Demo of infinite scroll prepared by Konrad Paluch for the recruitment process at OKO.press.

## Setup instruction
Clone the repo,

In the terminal, go to the project directory and run 'npm i' to install dependencies.

Then, start the server by running 'json-server --watch posts.json --port 3004'. 
Make sure to add the --port 3004, otherwise the app will not be able to reach it.

Open another terminal and go to the project directory again. Start the app by running 'npm start' command. 

## Available Scripts

In the project directory, you can run:

### `json-server --watch posts.json --port 3004`

Runs the json-server serving the posts.json, on port 3004.
This will work with the demo-forever-feed, as that will be launched on port 3000 and make requests to port 3004. 
Make requests to  [http://localhost:3004/posts](http://localhost:3004/posts) to get the json file.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `json-server --watch posts.json`

Runs the json server serving the posts.json, on port 3000.
Advised to run the script below.
Make requests to  [http://localhost:3000/posts](http://localhost:3000/posts) to get the json file.


