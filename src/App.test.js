import React from 'react';
import ReactDOM from 'react-dom';
import ShowSubscribers from './ShowSubscribers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowSubscribers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
