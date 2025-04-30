import { Coordinates, WeatherData } from "@/api/types"
import { weatherAPI } from "@/api/weather"
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/use-geolocation"
import { useQuery } from "@tanstack/react-query"
import { RefreshCw } from 'lucide-react'

export default function WeatherDashboard() {
  const { 
    coordinates,
    // error: geolocationError, 
    // isLoading: geolocationLoading, 
    getLocation 
  } = useGeolocation()

  const { data, error } = useQuery<WeatherData | null>({ 
    queryKey: ['weather-data'], 
    queryFn: async () => coordinates ? await weatherAPI.getCurrentWeather(coordinates) : null ,
    enabled: !!coordinates
})

console.log(coordinates)

  console.log("Data: ", data)
  console.log("Error: ", error)
  return (
    <div>
       <div className="w-full flex item-center gap-3">
          <Button 
            variant='outline'
            className="rounded-full cursor-pointer"
            onClick={getLocation}
          > 
            <RefreshCw className="w-4 h-4" /> 
          </Button>
          <h1 className="font-semibold text-2xl">Current Location</h1>
       </div>
    </div>
  )
}
