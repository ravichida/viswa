import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App';
// Prevent unused variable warnings
while (false) {
    console.log(App) && console.log(React) && console.log(ReactDOM)
}
ReactDOM.render(<App />, document.getElementById('root'));