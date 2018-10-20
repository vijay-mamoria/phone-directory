import React from 'react';
import ReactDOM from 'react-dom';
import './common/common.css';
import './index.css';
import PhoneDirectory from './PhoneDirectory';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
registerServiceWorker();
