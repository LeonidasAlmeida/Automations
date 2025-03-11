import styles from "./ButtonMachine.module.css";
const ButtonMachine =()=>{
    return(
        <div className={styles.h4}>
        <button className={styles.bt}>Ligar</button>
        <button className={styles.bt}>Desligar</button>
        </div>
    )
}
export default  ButtonMachine