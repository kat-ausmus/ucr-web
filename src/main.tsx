import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// Ensure background image URL works in dev and when deployed under a sub-path
// Use Vite's BASE_URL to point to the correct location of assets in /public
const ucrBgUrl = `${import.meta.env.BASE_URL}ucr-bg.png`

// Override the CSS variable at runtime so any classes using it get the right URL
if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--background-image-ucr-pattern', `url(${ucrBgUrl})`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
