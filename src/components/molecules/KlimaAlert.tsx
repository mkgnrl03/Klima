
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle  } from 'lucide-react'

type KlimaAlertProp = {
  status: 'error' | 'warn' | 'info',
  message: string
  title: string,
  children?: React.ReactNode
}

export default function KlimaAlert(props: KlimaAlertProp) {
  return (
    <Alert variant="destructive" className="shadow-md">
      {
        props.status === 'error' 
          ? <AlertCircle className="h-4 w-4" /> 
          : null
      }
     
      <AlertTitle>{props.title}</AlertTitle>
      <AlertDescription>
        <p className="mb-3">{props.message}</p>
        {props.children}
      </AlertDescription>
    </Alert>
  )
}
