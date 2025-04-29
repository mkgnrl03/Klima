import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"
import HomeLayout from "@/layouts/home-layout"
import { WeatherDashboard, CityPage } from "@/pages"


function App() {
  return (
   <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="klima-ui-theme">
     <HomeLayout>
      <Routes>
        <Route path="/" element={<WeatherDashboard />}/>
      </Routes>
      <Routes>
        <Route path="/city/:cityName" element={<CityPage />}/>
      </Routes>
     </HomeLayout>
    </ThemeProvider>
   </BrowserRouter>
  )
}

export default App
