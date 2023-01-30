import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<head>
<meta name="description" content="Little Lemon is a traditional mediterranean restaurant with a modern twist"/>
<meta name="og:title" content="Little Lemon"/>
<meta name="og:description" content="Little Lemon is a traditional mediterranean restaurant with a modern twist"/>
<meta name="og:image" content="Logo"/>
</head>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
