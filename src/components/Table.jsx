import React from 'react';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import './Table.scss';
import PropTypes from 'prop-types';

class Table extends React.Component {
    render() {
        const { books } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <HeaderCell>Id</HeaderCell>
                        <HeaderCell>Genre</HeaderCell>
                        <HeaderCell>Author</HeaderCell>
                        <HeaderCell>Title</HeaderCell>
                        <HeaderCell>Date</HeaderCell>
                    </tr>
                </thead>
                <tbody className="table--tbody">
                    {books.map(item => <tr key={item.id} className="table--tr">
                        <Cell>{item.id}</Cell>
                        <Cell>{item.genre}</Cell>
                        <Cell>{item.author.name} ({item.author.gender})</Cell>
                        <Cell>{item.title}</Cell>
                        <Cell>{item.publishedDate}</Cell>
                    </tr>)}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    books: PropTypes.array,
};
export default Table;