import styles from './ButtonBreak.module.css';
import { Contexto } from '../../../context/PausaContext';
import { useContext } from 'react';

const ButtonsBreak =()=>{
    const {apertar} = useContext(Contexto);
    return(
        <div className={styles.h3}>
            <button onClick={(e)=>{apertar("p100")}}>100</button>
            <button onClick={(e)=>{apertar("p200")}}>200</button>
            <button onClick={(e)=>{apertar("p300")}}>300</button>
            <button onClick={(e)=>{apertar("p400")}}>400</button>
         </div>
    )
}
export default ButtonsBreak