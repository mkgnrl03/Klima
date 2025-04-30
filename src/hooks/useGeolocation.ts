import type { Coordinates } from "@/api/types"
import { useEffect, useState } from "react"

interface GeolocationState {
  coordinates: Coordinates | null
  error: string | null
  isLoading: boolean
}

export function useGeolocation() {
  const [location, setLocation] = useState<GeolocationState>({
    coordinates: null,
    error: null,
    isLoading: true
  })

  const getLocation = () => {
    setLocation((prev) => ({ ...prev, isLoading: true, error: null }))

    // check if the navigation.geolocation is not supported in the client browser
    if(!navigator.geolocation) {
      setLocation({
        coordinates: null,
        isLoading: false,
        error: 'Geolocation is not supported by your browser'
      })
      return
    }

    const onSuccessGeo = (position: GeolocationPosition) => {
       setTimeout(() => {
        setLocation({
          coordinates: { 
            lat: position.coords.latitude,
            lon: position.coords.longitude
          },
          isLoading: false,
          error: null
        })
      }, 500)

    }
    const onErrorGeo = (error: GeolocationPositionError) => {
      let errorMessage: string = '';

      switch(error.code) {
        case error.PERMISSION_DENIED: 
          errorMessage = 'Location permission denied. Please enable location access.'
          break;
        case error.POSITION_UNAVAILABLE: 
          errorMessage = 'Location information unavailable.'
          break;
        case error.TIMEOUT:
          errorMessage = 'Location request timeout.'
          break;
        default: 
          errorMessage = 'An unknown error occured.'
          break;
      }

      setLocation({
        coordinates: null,
        isLoading: false,
        error: errorMessage
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return {
    ...location,
    getLocation
  }
}