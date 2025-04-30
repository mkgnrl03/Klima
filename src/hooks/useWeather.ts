import { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

// export const WEATHER_KEYS = {
//   weather: (coords: Coordinates) => ["wather",  coords] as const
// }

export function useWeatherQuery(coords: Coordinates | null ){
  return useQuery({
    queryKey: ['weather-query', coords ?? {lat: 0, lon: 0}] as const,
    queryFn: () => coords ? weatherAPI.getCurrentWeather(coords)  : null,
    enabled: !!coords
   })
}

export function useForecastQuery(coords: Coordinates | null ){
  return useQuery({
   queryKey: ['forecast-query', coords ?? {lat: 0, lon: 0}] as const,
   queryFn: () => coords ? weatherAPI.getForecast(coords)  : null,
   enabled: !!coords
  })
}

export function useReverseGeocodeQuery(coords: Coordinates | null){
  return useQuery({
   queryKey: ['reverse-geocode-query', coords ?? {lat: 0, lon: 0}] as const,
   queryFn: () => coords ? weatherAPI.reverseGeocode(coords)  : null,
   enabled: !!coords
  })
}