import React from 'react';
import BooksApi from './../api/BooksApi';
import { connect } from 'react-redux';
import store from './../redux/store';
import { loadBooks, loadVisibleBooks } from './../redux/actions';
import List from './List';
import PropTypes from 'prop-types';

let currentChunk;
const RECORDS_BY_PAGE = 50,
  //TODO: 
  TOTAL_RECORDS = 49999

class BooksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.fetchPage = this.fetchPage.bind(this);
  }
  render() {
    return <List list={this.props.visibleBooks}
      fetchPage={this.fetchPage}
      hasMore={this.props.hasMore} />;
  }
  fetchPage(page) {
    this.page = page;
    fetchPage(this.page, store);
  }
}


const mapStateToProps = (state) => {
  return {
    visibleBooks: state.visibleBooks,
    hasMore: state.books.endIndex <= TOTAL_RECORDS
  };
};

const connector = connect(mapStateToProps)(BooksContainer);
export default connector;
connector.propTypes = {
  visibleBooks: PropTypes.array,
  hasMore: PropTypes.bool
};

const loadFromStore = (wantedEnd, store) => {
  store.dispatch(loadVisibleBooks(store.getState().books.list.slice(0, wantedEnd)));
};

const fetchPage = (page, store) => {
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
    currentChunk = fetch;
    BooksApi.fetchChunk(fetch, (newState) => { 
      store.dispatch(loadBooks(newState));
      loadFromStore(wantedEnd, store) 
    });
  }
};
