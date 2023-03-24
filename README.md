# streaming request in worker?

## setup

1. npm install
2. npm run deploy
3. open worker url in browser

## worker code
`index.js`

## nodejs client code
`nodejs-client-test.mjs` is for testing worker code

> please change your own worker url in the code

### excpect result

Ideally, worker should return multiple chunks of data to client, but it only return one chunk of data.

## browser client code
> please open worker url first and run this code under worker url to avoid CORS issue

`chrome-console.js` is for testing worker code in chrome console

> please change your own worker url in the code


### excpect result

Ideally, worker should return multiple chunks of data to client, but it only return one chunk of data.