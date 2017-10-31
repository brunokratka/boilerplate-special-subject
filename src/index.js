import React                  from 'react';
import ReactDOM               from 'react-dom';
import Routes                 from './Router';
import registerServiceWorker  from './registerServiceWorker';

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();