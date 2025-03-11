
import { createContext,useEffect,useState } from "react";
import { useStopwatch } from "react-timer-hook";
export const ContextoTempo = createContext();

// Componente Provider
const TempoContexto = ({ children }) => {
const getDigits = (number) => String(number).padStart(2, "0").split("");
const [rodanddo,setRotando]=useState(false)
const [segundos,setSegundos] = useState(null);

const { seconds, minutes, hours, isRunning, start, pause, reset} = useStopwatch({ autoStart: false });

const TempoCronometro = () =>{
    setSegundos(""+getDigits(hours)[0]+""+getDigits(hours)[1]+" : "+""+getDigits(minutes)[0]+""+getDigits(minutes)[1]+" : "+getDigits(seconds)[0]+""+getDigits(seconds)[1]);
    return segundos
}
    return (
        <ContextoTempo.Provider value={{seconds, minutes, hours, isRunning,rodanddo,TempoCronometro,setRotando, start, pause, reset,getDigits}}>
            {children} {/* Renderiza os componentes filhos */}
        </ContextoTempo.Provider>
    );

};

export default  TempoContexto;
