import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneDirectory from './PhoneDirectory';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));
registerServiceWorker();
