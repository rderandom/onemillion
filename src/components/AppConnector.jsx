import BooksApi from './../api/BooksApi';
import { loadBooks, loadVisibleBooks } from './../redux/actions';
import App from './App';
import store from './../redux/store';
import { connect } from 'react-redux';

let currentChunk;
const RECORDS_BY_PAGE = 50,
    //TODO: 
    TOTAL_RECORDS = 49999

const loadFromStore = (wantedEnd, store) => {
    store.dispatch(loadVisibleBooks(store.getState().books.list.slice(0, wantedEnd)));
};

const fetchPage = (page) => {
    const wantedStart = (page - 1) * RECORDS_BY_PAGE,
        wantedEnd = wantedStart + RECORDS_BY_PAGE;
    let fetch;
    if (store.getState().books.list.length === 0) {
        //If we do not have any books in the store,
        //we fetch the first chunk from server.
        fetch = 1;
    } else {
        //We already have some books cached,
        //let's see if we can get the requested
        //data from there
        if (wantedEnd < store.getState().books.list.length) {
            //We already have those books cached!
            loadFromStore(wantedEnd, store);
        } else {
            //We must fetch new records
            fetch = currentChunk + 1;
        }
    }

    if (fetch) {
        //TODO: move currentChunk to store?
        currentChunk = fetch;
        BooksApi.fetchChunk(fetch, (newState) => {
            store.dispatch(loadBooks(newState));
            loadFromStore(wantedEnd, store)
        });
    }
};

const mapStateToProps = (state) => {
    return {
        visibleBooks: state.visibleBooks,
        hasMore: state.books.endIndex <= TOTAL_RECORDS
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPage: fetchPage
    };
};


const AppConnector = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppConnector;



