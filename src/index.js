import React from 'react';
import ReactDOM from 'react-dom';
import SplashPage from './SplashPage/SplashPage';
import App from './App/App';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App />, document.getElementById('root')
); {/*<SplashPage />, document.getElementById('root')*/}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
