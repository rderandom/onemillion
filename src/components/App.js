import React from 'react';
import InfiniteTable from './InfiniteTable';
import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    return <InfiniteTable list={this.props.visibleBooks}
      fetchPage={this.props.fetchPage}
      hasMore={this.props.hasMore} />;
  }
}

App.propTypes = {
  fetchPage: PropTypes.func.isRequired,
  visibleBooks: PropTypes.array,
  hasMore: PropTypes.bool
};

export default App;