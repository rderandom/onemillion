import React from 'react';
import './Row.scss';

const Row = function ({
    /** Book item */
    item
}) {
    return (<div className="row"><div className="row--id">{item.id}</div>
        <div className="row--genre">{item.genre}</div>
        <div className="row--author">{item.author.name} ({item.author.gender})</div>
        <div className="row--title">{item.title}</div>
        <div className="row--date">{item.publishedDate}</div></div>);
};
export default Row;