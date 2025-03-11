
import '../styles/StyledLoginPage.css';
const card = require('../assets/LoginAsset/proximity_card.jpg');
const wait = require('../assets/LoginAsset/wait.gif');
const logo = require('../assets/GlobalAsset/logo.png');


const PgLogin =()=>{
  
    
    return( <div className='wrapper'>
                <div className='header'>
                   <img className="logo" src={logo} />
                </div>
                <div className='main'>  
                    <img className ="wait" src={wait}/>
                    <img className="cardImage" src={card}/>
                  
               </div>
            </div>
    );
}
export default PgLogin