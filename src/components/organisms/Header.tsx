import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router";
import { Sun, Moon } from 'lucide-react';

export default function Header() {
  const { theme, setTheme } = useTheme()

  const isDarkMode = theme === 'dark'

  const handleThemeToggle = () => {
    if(isDarkMode) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <header className='sticky top-0 z-50 shadow-md p-4 flex justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'> 
      <h1> <Link to={"/"}>Klima</Link></h1>
        <div
          className={`
            cursor-pointer transition p-2 rounded duration-500
            ${isDarkMode ? 'rotate-180' : 'rotate-reverse-0' }
          `}
          onClick={handleThemeToggle}
        >
          {
           isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
          }
        </div>
    </header>
  )
}
