import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "@/context/theme-provider"
import HomeLayout from "@/layouts/home-layout"
import { WeatherDashboard, CityPage } from "@/pages"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000)
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  )
}

export default App
