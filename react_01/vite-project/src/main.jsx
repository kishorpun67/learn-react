import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Tag =(<a href='google.com'>hello</a>) 
const anotheruser= "kishor"
const htmlElement =React.createElement(
    'a',
    {
      href: 'http://reactjs.org',
      target: '_blank',
    },
    'click me',
    anotheruser
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
