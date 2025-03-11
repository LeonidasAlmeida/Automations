import { useContext } from 'react';
import styles from './MainContent.module.css';
import { ContextoModal } from '../../../context/ModalExport';

import ChartTempo from '../../Charts/Temperatura/ChartTemp';
import ConectaBanco from '../../../Data/CRUD/ConectaBanco';
import Displaycount from '../../TimerCount/Displaycount';
import Detalhes from '../../TimerCount/Detalhes';
import Impressoes from '../../Charts/Impressoes/Impressoes';

    const fixed = require("../../../assets/GlobalAsset/fixed.gif");
    const unfixed = require("../../../assets/GlobalAsset/watch.gif");
    const destino = require("../../../assets/GlobalAsset/destino.gif");

const MainContent = () =>{

    const {ConteudoHTML} = useContext(ContextoModal);
    const {Humidade,Temperatura} = ChartTempo();

    const {enviarDados} = ConectaBanco();
    
    return(
        
        <div className={styles.h1}>

            {ConteudoHTML()}
            <div className={styles.wrapper3}>
            <div className={styles.aa2}>
            <Displaycount styled={styles}/>
            </div>
            <Detalhes />
            <div className={styles.aa1}>
            <div className={styles.wrapper}>
            <Impressoes />
            <Humidade  />
            <Temperatura />
            </div>a1</div>
            </div>
        </div>
    )
}
export default MainContent


               /*
               enviarDados(
                        {
                            inicio: `${inicio}`,
                            fim :`${fim}`,
                            tempo : ``,
                            data : `${data}`
                            })
               */