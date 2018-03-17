import React from 'react'
import './Cell.scss';
import PropTypes from 'prop-types';

const Cell = function (props) {
    return <td className="cell">{props.children}</td>;
}
Cell.propTypes = {
    children: PropTypes.string
};
export default Cell