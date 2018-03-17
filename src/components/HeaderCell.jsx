import React from 'react'
import './HeaderCells.scss';

const HeaderCell = function (props) {
    return <td className="header-cell">{props.children}</td>;
}
export default HeaderCell