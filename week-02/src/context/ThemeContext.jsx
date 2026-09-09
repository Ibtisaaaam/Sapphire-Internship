import { createContext, useState, useContext } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  const themeStyles = {
    backgroundColor: darkMode ? '#0b0f17' : '#f8fafc',
    color: darkMode ? '#f1f5f9' : '#0f172a',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)