import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCell from './HeaderCell';

it('renders without crashing', () => {
  const tr = document.createElement('tr');
  ReactDOM.render(<HeaderCell>asdf</HeaderCell>, tr);
  ReactDOM.unmountComponentAtNode(tr);
});
