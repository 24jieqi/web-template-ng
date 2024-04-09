import { createRoot } from 'react-dom/client'

import App from './app'
// import config from './config'

import './index.css'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
