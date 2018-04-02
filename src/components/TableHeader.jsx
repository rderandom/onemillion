import React from 'react';
import './TableHeader.scss';
import Row from './Row';

const TableHeader = function () {
    const item = {
        id: 'Id',
        genre: 'Genre',
        author: { name: 'Author', gender: 'Gender' },
        title: 'Title',
        publishedDate: 'Date'
    };
    return (<div className="header"><Row item={item} /></div>);
};
export default TableHeader;