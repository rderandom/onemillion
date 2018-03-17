import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import { RingLoader } from 'react-spinners';
import './List.scss';

class List extends React.Component {
    render() {
        const { list } = this.props;
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
                    <table className="list--table">
                        <thead>
                            <tr>
                                <HeaderCell>Id</HeaderCell>
                                <HeaderCell>Genre</HeaderCell>
                                <HeaderCell>Author</HeaderCell>
                                <HeaderCell>Title</HeaderCell>
                                <HeaderCell>Date</HeaderCell>
                            </tr>
                        </thead>
                        <tbody className="list--tbody">
                            {list.map(item => <tr key={item.id} className="list--tr">
                                <Cell>{item.id}</Cell>
                                <Cell>{item.genre}</Cell>
                                <Cell>{item.author.name} ({item.author.gender})</Cell>
                                <Cell>{item.title}</Cell>
                                <Cell>{item.publishedDate}</Cell>
                            </tr>)}
                        </tbody>
                    </table>
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

export default List;