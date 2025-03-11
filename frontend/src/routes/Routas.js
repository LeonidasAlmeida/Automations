import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PgMenu from '../pages/PgHome';
import PgLogin from '../pages/PgLogin';
import PausaContext from '../context/PausaContext';
import ModalExport from '../context/ModalExport';
import ModalParagem from '../components/Modals/Paragem/ModalParagem';
import TempoContexto from '../context/TempoContext';


export default function Routas(){
    return(
        <Router>
             <PausaContext>
                    <TempoContexto>
                            <ModalExport>
                            
                                    <Routes>
                                        <Route path='/' element={<PgMenu />} />   
                                        <Route path='/modal' element={<ModalParagem />} />
                                        <Route path='/home' element={<PgMenu />} /> 
                                        <Route path='/login/' element={<PgLogin />} />
                                    </Routes>
                                
                            </ModalExport>
                    </TempoContexto>
            </PausaContext >
        </Router>
    )
}