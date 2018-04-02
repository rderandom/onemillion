import oboe from 'oboe';
const BooksApi = {
    fetchChunk: (chunkNumber, callback) => {
        return oboe('mock/books' + chunkNumber + '.json');
    }
};

export default BooksApi;