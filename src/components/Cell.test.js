import React from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell';

it('renders without crashing', () => {
  const tr = document.createElement('tr');
  ReactDOM.render(<Cell>asdf</Cell>, tr);
  ReactDOM.unmountComponentAtNode(tr);
});
