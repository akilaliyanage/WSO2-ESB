import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/nethsara/css/style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

// import './assets/nethsara/js/vendor/jquery-1.11.2.min.js'
// import './assets/nethsara/js/vendor/bootstrap.min.js'
// import './assets/nethsara/js/isotope.pkgd.min.js'
// import './assets/nethsara/js/owl.carousel.min.js'
// import './assets/nethsara/js/wow.min.js'
// import './assets/nethsara/js/custom.js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
