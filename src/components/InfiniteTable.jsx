import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Table from './Table';
import { PropagateLoader } from 'react-spinners';
import './InfiniteTable.scss';
import PropTypes from 'prop-types';

class InfiniteTable extends React.Component {
    render() {
        return (
            <div className="infinite-table">
                <InfiniteScroll
                    pageStart={1}
                    loadMore={this.props.fetchPage}
                    hasMore={this.props.hasMore}
                    initialLoad={false}
                    useWindow={false}
                    threshold={300}
                    loader={<div className='infinite-table--loading'>
                        <PropagateLoader
                            color={'#698C8B'}
                            loading={true}
                        />
                    </div>}>
                    <Table books={this.props.list} />>
                </InfiniteScroll>
            </div>
        );
    }
    componentDidMount() {
        if (!this.props.list.length) {
            this.props.fetchPage(1);
        }
    }
};

InfiniteTable.propTypes = {
    list: PropTypes.array,
    fetchPage: PropTypes.func
};
export default InfiniteTable;