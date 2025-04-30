import KlimaAlert from "@/components/molecules/KlimaAlert"
import UserLocationCard from "@/components/molecules/UserLocationCard"
import WeatherSkeleton from "@/components/molecules/WeatherSkeleton"
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/useGeolocation"
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from "@/hooks/useWeather"


import { MapPin, RefreshCw } from 'lucide-react'

export default function WeatherDashboard() {
const { 
  coordinates,
  error: geolocationError, 
  isLoading: geolocationLoading, 
  getLocation 
} = useGeolocation()

const weatherQuery = useWeatherQuery(coordinates)
const locationQuery = useReverseGeocodeQuery(coordinates)
const forecastQuery = useForecastQuery(coordinates)

const handleRefresh = () => {
  getLocation()
  if(coordinates) {
    weatherQuery.refetch()
    locationQuery.refetch()
    forecastQuery.refetch()
  }
}

if(geolocationLoading){
  return <WeatherSkeleton />
}

if(geolocationError || !coordinates) {
  const message = geolocationError 
    ? geolocationError 
    : "Please enable location access to see your local weather."
    
  return <>
    <KlimaAlert 
      title={ geolocationError ? 'Geolocation Error' : 'Location Required!'} 
      message={message} 
      status="error"
    >
      <Button 
        className="flex items-center justify-between gap-2 hover:text-red-400" 
        variant="outline"
        onClick={getLocation}
      >
        <MapPin className="w-4 h-4"/>
        Enable Location
      </Button>
    </KlimaAlert>
   </>
}

  return (
    <div className="flex flex-col gap-6">
       <div className="w-full flex item-center gap-3">
          <Button 
            variant='outline'
            className={`
              rounded-full cursor-pointer
              ${geolocationLoading ? 'rotate-180' : 'rotate-0'}
            `}
            onClick={handleRefresh}
          > 
            <RefreshCw className="w-4 h-4" /> 
          </Button>
          <h2 className="font-semibold text-2xl">Current Location</h2>
       </div>
       <UserLocationCard 
         data={weatherQuery.data}
        />
    </div>
  )
}
