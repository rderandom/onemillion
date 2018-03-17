import React from 'react'
import './Cell.scss';

const Cell = function (props) {
    return <td className="cell">{props.children}</td>;
}
export default Cell