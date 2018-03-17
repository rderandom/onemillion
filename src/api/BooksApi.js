import oboe from 'oboe';

const fetchChunk = (chunkNumber, callback) => {
    oboe('mock/books' + chunkNumber + '.json')
        // .node('{title}', function (book) {
        //   // I'll be called for every object found that has title
        //   // console.log('Go read ', book);
        // })
        .done(function (books) {
            const newState = {
                list: books
            };
            callback(newState);
        });
};


export default fetchChunk;