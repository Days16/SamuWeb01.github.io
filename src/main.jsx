import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TitleJsx from "./components/TitleJsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <TitleJsx/>
    <App/>
    </>
  </React.StrictMode>,
)
