export interface Coordinates {
  lat: number,
  lon: number 
}

export interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface Wind {
  speed: number,
  deg: number,
  gust: number
}

export interface WeatherData {
  coord: Coordinates
  weather: Weather
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
 },
 visibility: number
 wind: Wind
 rain: { '1h': number }
 clouds: { all: number }
 dt: number
 sys: {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
 }
 timezone: number
 id: number
 name: string
 cod: 200
}

export interface ForecastData {
  list: Array<{
      dt: number
      main: WeatherData['main']
      weather: WeatherData['weather'],
      wind: WeatherData['wind'],
      dt_txt: string
  }>
  city: {
    name: string
    country: string 
    sunrise: number
    sunset: number
  }
}          

export interface GeocodingData {
  name: string
  local_names?: Record<string, string>
  lat: number
  lon: number 
  country: string
  state?: string
}
                       