import React,{useState} from "react"
import Card from "./components/Card"
import { ThemeProvider } from "./context/ThemContext"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  return (
    <>
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Card/>
    </ThemeProvider>
    </>
  )
}

export default App
