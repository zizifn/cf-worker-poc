# streaming request in worker?

## worker code
index.js

## nodejs client code
`nodejs-client-test.mjs` is for testing worker code

### excpect result

Ideally, worker should return multiple chunks of data to client, but it only return one chunk of data.

## browser client code
> please open worker url first and run this code under worker url console to avoid CORS issue

`chrome-console.js` is for testing worker code in chrome console


### excpect result

Ideally, worker should return multiple chunks of data to client, but it only return one chunk of data.