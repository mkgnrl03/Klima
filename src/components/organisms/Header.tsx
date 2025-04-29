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
    <header className='sticky top-0 z-50 shadow-md p-6 flex justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'> 
      <h1> <Link to={"/"}>Klima</Link></h1>
      <ul className="flex gap-3 items-center">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/city"}>City</Link>
        </li>
        <li 
          className={`
            cursor-pointer transition p-2 rounded duration-500
            ${isDarkMode ? 'rotate-180' : 'rotate-reverse-0' }
          `}
          onClick={handleThemeToggle}
        >
          {
           isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
          }
        </li>
      </ul>
    </header>
  )
}
