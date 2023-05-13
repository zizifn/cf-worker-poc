import { AsyncLocalStorage } from 'node:async_hooks';

const requestId = new AsyncLocalStorage();

function logWithId(state) {
    console.log(`${requestId.getStore()} - ${state}`);
}

function doSomething() {
    logWithId("doing something");
    setTimeout(() => doSomethingElse(), 10);
}

function doSomethingElse() {
    logWithId("doing something else");
}

let idSeq = 0;

export default {
    async fetch(req) {
        return requestId.run(idSeq++, () => {
            doSomething();
            logWithId('complete');
            return new Response("ok");
        });
    }
}