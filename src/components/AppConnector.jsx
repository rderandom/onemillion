import BooksApi from './../api/BooksApi';
import { loadBooks, setIsLoading } from './../redux/actions';
import App from './App';
import store from './../redux/store';
import { connect } from 'react-redux';
import CONSTANTS from './../Constants';
const TOTAL_RECORDS = CONSTANTS.TOTAL_RECORDS;
const RECORDS_PER_ROW = 1000;

const fetchNewChunkFromServer = (pageToFetch, startIndex, stopIndex) => {
    return BooksApi.fetchChunk(pageToFetch);
};

const loadPage = (options) => {
    const { startIndex, stopIndex } = options;
    // Callback to be invoked when more rows must be loaded.
    // It should implement the following signature: ({ startIndex: number, stopIndex: number }): Promise. 
    //The returned Promise should be resolved once row data has finished loading. 
    //It will be used to determine when to refresh the list with the newly-loaded data. 
    //This callback may be called multiple times in reaction to a single scroll event.
    let pageToFetch;
    const booksLength = store.getState().books.list.length;

    if (startIndex === stopIndex) {
        return;
    }
    if (store.getState().books.isLoading) {
        return;
    }

    if (booksLength === 0) {
        //If we do not have any books in the store,
        //we fetch the first chunk from server.
        pageToFetch = 1;
    } else {
        //We already have some books cached,
        //let's see if we can get the requested
        //data from there
        const stopIndexFound = store.getState().books.list.find((book) => book && book.id === stopIndex);

        //We must fetch new records
        if (stopIndexFound) {
            pageToFetch = 1 + Math.floor(startIndex / RECORDS_PER_ROW);
        } else {
            pageToFetch = 1 + Math.floor(stopIndex / RECORDS_PER_ROW);
        }

    }

    //This promise will be resolved with the list of visible list
    //(coming from store.books)
    const promise = new Promise(function (resolve, reject) {
        if (pageToFetch) {
            store.dispatch(setIsLoading(true));
            const booksApiPromise = fetchNewChunkFromServer(pageToFetch, startIndex, stopIndex);
            booksApiPromise.done((newChunkOfBooks) => {
                //Load the complete chunk in the store
                const newState = {
                    list: newChunkOfBooks,
                    wantedStart: startIndex,
                    wantedEnd: stopIndex,
                    currentPage: pageToFetch
                };
                store.dispatch(loadBooks(newState));
                store.dispatch(setIsLoading(false));
                const { books } = store.getState();
                resolve(books.list);
            });
        } else {
            const { books } = store.getState();
            resolve(books.list);
        }
    });
    return promise;
};


const mapStateToProps = (state) => {
    const { books } = state;
    return {
        visibleBooks: books.list,
        hasMore: books.endIndex <= TOTAL_RECORDS,
        isNextPageLoading: books.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPage: loadPage
    };
};


const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnector;



