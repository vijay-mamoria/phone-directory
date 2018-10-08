import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import App from './App';
import AddSubscriber from './AddSubscriber';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AddSubscriber />, document.getElementById('root'));
registerServiceWorker();
