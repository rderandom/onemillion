import React from 'react';
import InfiniteTable from './InfiniteTable';
import Casumo from './Casumo';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (<section className="main">
      <h2>Casumo Javascript Challenge</h2>
      <InfiniteTable list={this.props.visibleBooks}
        hasNextPage={this.props.hasMore}
        loadNextPage={this.props.fetchPage}
        isNextPageLoading={this.props.isNextPageLoading} />
      <Casumo />
    </section>);
  }

}

App.propTypes = {
  visibleBooks: PropTypes.array,
  hasMore: PropTypes.bool,
  isNextPageLoading: PropTypes.bool,
  fetchPage: PropTypes.func.isRequired
};

export default App;