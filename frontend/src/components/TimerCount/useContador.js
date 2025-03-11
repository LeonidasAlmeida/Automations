import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
const useContador = () => {
const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
return(
    {
        
    }
  )
}
export default useContador