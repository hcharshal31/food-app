import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
