import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Heading.jsx'
import Form from './Form.jsx'
import DisplayProjects from './ProjectDisplay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form />
    <DisplayProjects/>
  </StrictMode>,
)
