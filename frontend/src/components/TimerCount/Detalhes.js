import { useContext, useEffect, useState } from 'react';
import styles from '../Menu/MainContent/MainContent.module.css';
import { ContextoTempo } from '../../context/TempoContext';
import ConectaBanco from '../../Data/CRUD/ConectaBanco';

import { ContextoModal } from '../../context/ModalExport';

const fixed = require("../../assets/GlobalAsset/fixed.gif");
const unfixed = require("../../assets/GlobalAsset/watch.gif");
const destino = require("../../assets/GlobalAsset/destino.gif");

const Detalhes = () => {
    const { enviarDados } = ConectaBanco();
    const { pause, isRunning, TempoCronometro } = useContext(ContextoTempo);
    const [tempoInicial, setTempoInicial] = useState("");
    const [tempoFinal, setTempoFinal] = useState("");
    const [parou, setParou] = useState(false);

    const { setEstadoContador, conteudoExport } = useContext(ContextoModal);

    useEffect(() => {
        const localDate = new Date();
        const horario = `${localDate.getHours()}:${localDate.getMinutes()}:${localDate.getSeconds()}`;

        if (isRunning) {
            console.log("Início registrado: ", horario);
            setTempoFinal("");
            setTempoInicial(horario);
        } else {
            console.log("Fim registrado: ", horario);
            setTempoFinal(horario);
        }
    }, [isRunning]); // Corrigido para depender de isRunning

    useEffect(() => {
        if (parou) {
            const data = new Date().toDateString();
            const localDate = new Date();
            const horario = `${localDate.getHours()}:${localDate.getMinutes()}:${localDate.getSeconds()}`;
            enviarDados({
                inicio: tempoInicial,
                fim: horario,
                tempo: TempoCronometro(),
                data: data,
                codigoParagem: conteudoExport[2],
                descricaoParagem: `${conteudoExport[0]} ${conteudoExport[1]}`
            });

            setParou(false);
        }
    }, [parou]); // Agora executa apenas quando `parou` mudar

    return (
        <div className={styles.aa3}>
            <div className={styles.textoInformativo2}>
                <div className={styles.detalhes}>LAST TIME START</div>
                <div className={styles.timer}>{tempoInicial}</div> 
            </div>

            <div className={styles.textoInformativo}>
                <div className={styles.detalhes}>LAST TIME FINISH</div>
                <div className={styles.timer}>{tempoFinal}</div>
            </div>

            <div className={styles.textoInformativo3}>
                <div className={styles.detalhes}>LAST TIME TOTAL</div>
                <div className={styles.timer}>{TempoCronometro()}</div>
            </div>

            <img className={styles.iconWork} src={fixed} />
            <img className={styles.iconWork2} src={unfixed} />
            <img className={styles.iconWork3} src={destino} />

            <button className={styles.parar} onClick={() => {
                setParou(true);
                setEstadoContador(true);
                pause();
            }}>
                Parar
            </button>
        </div>
    );
};

export default Detalhes;

/* 
https://dl.tutoo.ir/upload/Book/Complete/ inglês
        */