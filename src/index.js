import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// 브라우저 새로고침을 하지 않고 갱신하는 코드
if (module.hot) {
    module.hot.accept();
}