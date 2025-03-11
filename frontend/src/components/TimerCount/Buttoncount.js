import { useContext } from 'react';
import { ContextoTempo } from '../../context/TempoContext';
import styled from './TimerCount.module.css';

const Buttoncount = () => {
const{start, pause, reset} = useContext(ContextoTempo);
  return(
            <div>
                <button className={styled.bt} onClick={(e)=>start()}>iniciar</button>
                <button className={styled.bt} onClick={(e)=>pause()}>parar</button>
                <button className={styled.bt} onClick={(e)=>reset()}>resetar</button>
            </div>
        )
}
export default Buttoncount