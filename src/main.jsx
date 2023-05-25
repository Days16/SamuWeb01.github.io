import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TitleJsx from "./components/TitleJsx";
import FormJsx from "./components/FormJsx";
import EndTitleJsx from "./components/EndTitleJsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <TitleJsx/>
    <FormJsx/>
    <EndTitleJsx/>
    <App/>
    </>
  </React.StrictMode>,
)
