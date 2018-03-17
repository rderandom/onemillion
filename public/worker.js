// const oboe = require('oboe');

importScripts("require.js");
requirejs.config({
    //Lib path
    baseUrl: '.',
    // Some specific paths or alternative CDN's
    paths: {

    },
    waitSeconds: 20
});

requirejs(["oboe"], (TheLibrary) => {
    // code after all is loaded
    self.onmessage = (msg) => {
        // do stuff
        TheLibrary.doStuff(msg.data);
    }
    // I tend to dispatch some message here
    self.postMessage("worker_loaded");
});


// self.addEventListener('install', function () {
//     console.log('Install!');
// });

// self.addEventListener('activate', function () {
//     console.log('Activate!');
// });

var n = 1;
search: while (true) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
        if (n % i == 0)
            continue search;
    // found a prime!
    postMessage(n);
}


// const dispatch = (book) => {
//     postMessage(book);
// }

// oboe('/books.json')
//     .node('{title}', function (book) {
//         // I'll be called for every object found that has title
//         // console.log('Go read ', book);
//         dispatch(book);
//     })
//     .done(function (things) {

//         console.log('there are', things.length, 'things t')
//     });