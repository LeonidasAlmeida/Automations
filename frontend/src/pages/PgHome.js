import styles from '../styles/StyledHomePage.module.css';
import LeftBar from '../components/Menu/LeftBar/LeftBar';
import ButtonsBreak from '../components/Menu/ButtonBreak/ButtonBreak';
import MainContent from '../components/Menu/MainContent/MainContent';
import ButtonMachine from '../components/Menu/ButtonMachine/ButtonMachine';

const PgMenu =()=>{
    return(
        <div className={styles.wrapper}>
            <MainContent />
            <LeftBar />
            <ButtonsBreak />
            <ButtonMachine />
        </div>
    );
}
export default PgMenu