import { useContext } from 'react';
import styles from './LeftBar.module.css';
import { Contexto } from '../../../context/PausaContext';
import { ContextoModal } from '../../../context/ModalExport';
import { ContextoTempo } from '../../../context/TempoContext';
const LeftBar = () =>{
    const {items} = useContext(Contexto);
    const {estadoContador,AbrirModal} = useContext(ContextoModal);
    
        return(
            <div className={estadoContador ? styles.h2 :styles.desabilitar } > 
               {items.map((e)=>(
                     <ul key={e.id}>
                            {e.subCategoria.map((i) => ( <li className={styles.items} onClick={(e)=>{AbrirModal(Number(`${i}`));}}>{i}</li>))}</ul>))} </div>)
                }
export default LeftBar


