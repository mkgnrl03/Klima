import { WeatherData } from "@/api/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThermometerSnowflake, ThermometerSun, Droplets, Wind } from 'lucide-react'
import { Skeleton } from "../ui/skeleton";


type UserLocationCardProps = {
  data: WeatherData | null | undefined
}

export default function UserLocationCard(props: UserLocationCardProps) {

  if(!props.data) {
    return <>
      <Card className="w-[500px] min-h-[200px] flex items-center justify-center">
        <CardHeader className="w-full">
         <Skeleton className="h-4 w-1/2 rounded-lg" />
         <Skeleton className="h-4 w-5/6 rounded-lg" />
        </CardHeader>
        <CardContent className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <Skeleton className="h-20 w-20 rounded-lg" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-36 rounded-lg" />
                <Skeleton className="h-4 w-36 rounded-lg" />
              </div>
            </div>
            <div className="flex gap-3">
              <Skeleton className="h-12 w-36 rounded-lg" />
              <Skeleton className="h-12 w-36 rounded-lg" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  }
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className="text-xl">{props.data.name}</CardTitle>
        <CardDescription>{props.data.sys.country}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <h1 className="font-bold text-6xl">{props.data.main.temp}°</h1>
            <div className="text-sm flex flex-col gap-1">
              <p className="text-gray-400/80">Feels like {props.data.main.feels_like}°</p>
              <div className="flex items-center justify-center gap-3">
                <span className="flex items-center justify-center gap-1 text-blue-500">
                  <ThermometerSnowflake className="w-4 h-4"/>
                  {props.data.main.temp_min}°
                </span>
                <span className="flex items-center justify-center gap-1 text-yellow-500">
                  <ThermometerSun className="w-4 h-4"/>
                  {props.data.main.temp_max}°
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-center justify-start">
            {/* Humidity */}
            <div className="flex gap-2 items-center justify-start">
              <Droplets className="w-6 h-6 text-blue-500"/>
              <div className="text-sm">
                <p className="">Humidity</p>
                <span>{props.data.main.humidity}%</span>
              </div>
            </div>

              {/* Wind Speed */}
              <div className="flex gap-2 items-center justify-start">
                <Wind className="w-6 h-6 text-blue-500"/>
                <div className="text-sm">
                  <p className="">Wind Speed</p>
                  <span>{props.data.wind.speed} m/s</span>
                </div>
              </div>

          </div>
         </div>
      </CardContent>
    </Card>
  )
}
