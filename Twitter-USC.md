# Twitter-USC

A website created inorder to retreive 10 tweets from a user after checking if the user exists or not.


## Features
- Easy and readable UI
- Takes the input of the user about a user name
- The user's existence is determinded and dynamically loads options to retrieve tweets
- On successful retriving of the tweets a message is passed and dynamically a download button is displayed to the user
- The user can download the 10 tweets from the user

## API used
- Twitter API v2 to check user validity
- Twitter API v1.1 to retrieve tweets of the user

## How to run?
- Install node JS
- `brew install yarn`
- Clone the repository 
- `cd twitter-usc` 
-  `yarn add`
-  `yarn start`
-  Go to https://cors-anywhere.herokuapp.com/corsdemo and click on 'Request temporary access to the demo server'
-  The reason for the above step is needed as Twitter API in it's CORS policy does not accept a browser request. By doing so you will get a temporary server to test the code.

