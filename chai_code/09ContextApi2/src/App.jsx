import './App.css'
import Card from './components/Card';
import ThemeBtn from './components/ThemeButton';
import { ThemeProvider } from './context/theme'
import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(theme)
  }, [theme])
  

  const darkTheme = () => {
    setTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
  };

  return (
    <>
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Button */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
