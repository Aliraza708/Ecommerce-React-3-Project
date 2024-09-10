import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import UserContextprovider from './Context/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserContextprovider> */}
      <App />
    {/* </UserContextprovider> */}
    
  </StrictMode>,
)
