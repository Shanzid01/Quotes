# Quotes
REST API for getting quotes and jokes

## Try now:<br/>
Jokes: https://us-central1-c206-asgn.cloudfunctions.net/joke <br/>
Quote: https://us-central1-c206-asgn.cloudfunctions.net/inspireMe


## Stacks used:<br/>
1) Node.js for back-end<br/>
2) Firebase cloud functions for deploying the project

Limited to ~5000 API calls per day (firebase free tier)

## Deploying <br/>
1) Download source code <br/>
2) Run `firebase init` <br/>
3) Follow through instructions to set up `firebase functions` project <br/>
4) Run `firebase serve --only functions` to serve project locally (at localhost:5000) <br/>
5) Deploy project by running `firebase deploy --only functions` <br/>

## Structure: <br/>
* *index.js* contains all core functions <br/>
* data for jokes is in *jokes.json* <br/>
* data for quotes is in *quotes.json* <br/>

## Thanks to <br />
1) [Jokes-API dataset](https://github.com/Sv443/JokeAPI/blob/master/JokeAPI_Server/data/jokes.json) for jokes <br/>
2) [Quotes dataset](https://gist.github.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80) by @nasrulhazim <br/>

*Project primarily made for displaying quotes/jokes on user login in bash for COMP206, McGill University.*
