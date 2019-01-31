import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from './Router';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css'

ReactDOM.render(<RouterPage />, document.getElementById('root'));
registerServiceWorker();
