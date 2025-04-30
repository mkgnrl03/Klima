import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"
import HomeLayout from "@/layouts/home-layout"
import { WeatherDashboard, CityPage } from "@/pages"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
   <BrowserRouter>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
   </BrowserRouter>
  )
}

export default App
