import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import 'normalize.css'
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
