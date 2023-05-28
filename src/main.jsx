import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import TitleJsx from "./components/Title/TitleJsx";
import Navbar from "./components/Navbar/NavbarJsx";
import FormJsx from "./components/Form/FormJsx";
import EndTitleJsx from "./components/EndTitle/EndTitleJsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Navbar/>
    <FormJsx/>
    <EndTitleJsx/>
    <App/>
    </>
  </React.StrictMode>,
)
