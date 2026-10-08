import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import { Router } from 'wouter'
import { App } from './App'
import '@radix-ui/themes/styles.css'
import './index.css'

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

createRoot(document.getElementById('root')!).render(
  <Theme appearance="dark" hasBackground={false}>
    <Router base={base}>
      <App />
    </Router>
  </Theme>
)
