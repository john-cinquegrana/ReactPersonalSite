import { ThemeProvider } from '@emotion/react'
import './App.css'
import Home from './components/Home'
import { lightTheme } from './components/theme'

function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
