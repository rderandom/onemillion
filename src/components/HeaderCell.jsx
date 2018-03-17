import React from 'react'
import './HeaderCell.scss';
import PropTypes from 'prop-types';

const HeaderCell = function (props) {
    return <td className="header-cell">{props.children}</td>;
}

HeaderCell.propTypes = {
    children: PropTypes.string
};
export default HeaderCell