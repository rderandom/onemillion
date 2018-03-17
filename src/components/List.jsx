import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import Table from './Table';
import { RingLoader } from 'react-spinners';
import './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <InfiniteScroll
                    pageStart={1}
                    loadMore={this.props.fetchPage}
                    hasMore={this.props.hasMore}
                    initialLoad={false}
                    useWindow={false}
                    threshold={300}
                    loader={<div className='list--loading'>
                        <RingLoader
                            color={'#000000'}
                            loading={true}
                        />
                    </div>}>
                <Table books={this.props.list}/>>
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

List.propTypes = {
    list: PropTypes.array,
    fetchPage: PropTypes.function
};
export default List;