import { useContext } from 'react';
import styled from './TimerCount.module.css';
import { ContextoTempo } from '../../context/TempoContext';
const Displaycount = () => { 
         const{seconds, minutes, hours, getDigits} = useContext(ContextoTempo);
         return(
                 <div className={styled.wrapper}>  
                    <div className={styled.hora1}>{getDigits(hours)[0]}</div>
                    <div className={styled.hora2}>{getDigits(hours)[1]}</div>
    
                    <div className={styled.cardImage1}/>
    
                    <div className={styled.minuto1}>{getDigits(minutes)[0]}</div>
                    <div className={styled.minuto2}>{getDigits(minutes)[1]}</div>
    
                    <div className={styled.cardImage2}/>
    
                    <div className={styled.segundo1}> {getDigits(seconds)[0]} </div>
                    <div className={styled.segundo2}>{getDigits(seconds)[1]}</div>
                </div>
            )
}
export default Displaycount
