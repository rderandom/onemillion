import React from 'react';
import { List, InfiniteLoader } from 'react-virtualized';
import Row from './Row';
import TableHeader from './TableHeader';
import { RingLoader } from 'react-spinners';
import './InfiniteTable.scss';
import CONSTANTS from './../Constants';
const TOTAL_RECORDS = CONSTANTS.TOTAL_RECORDS;

const InfiniteTable = function ({
  /** Are there more items to load? (This information comes from the most recent API request.) */
  hasNextPage,
  /** Are we currently loading a page of items? (This may be an in-flight flag in your Redux store for example.) */
  isNextPageLoading,
  /** List of items loaded so far */
  list,
  /** Callback function (eg. Redux action-creator) responsible for loading the next page of items */
  loadNextPage
}) {

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) => !hasNextPage || list[index]

  const getRow = (item) => {
    return (<Row item={item} />)
  };

  // Render a list item or a loading indicator.
  const rowRenderer = ({ index, key, style }) => {
    let content
    if (!isRowLoaded({ index })) {
      content = <span className="span__loading">Loading...</span>
    } else {
      content = getRow(list[index]);
    }
    return (
      <div key={key} style={style}>
        {content}
      </div>
    )
  }

  return (
    <section className="infinite-table">
      <TableHeader />
      <div className="loader">
        <RingLoader
          color={'#ffc930'}
          loading={isNextPageLoading}
        />
      </div>
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={TOTAL_RECORDS}>
        {({ onRowsRendered, registerChild }) => (
          <List
            rowCount={TOTAL_RECORDS}
            rowHeight={30}
            height={500}
            width={900}
            ref={registerChild}
            onRowsRendered={onRowsRendered}
            rowRenderer={rowRenderer}
          />
        )}
      </InfiniteLoader>
    </section >
  )
}

export default InfiniteTable;