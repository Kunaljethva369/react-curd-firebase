import { useState } from 'react';
import Cards from './Components/Cards/Cards';
import Navbar from './Components/Navbar/Navbar';
import PopUp from './Components/PopUp/PopUp';

function App() {

    const [user, setUser] = useState([]);
    const [popUp, setPopup] = useState(false);

    const openPopUp = () => {
        setPopup(true);
    }

    const closePopup = () => {
        setPopup(false);
    }

    return (
        <>
            <div className='container'>
                <Navbar props={{ setPopup, openPopUp }} />
                <Cards props={{ user, setUser, setPopup }} />
                <PopUp props={{ popUp, setPopup, closePopup, user, setUser }} />
            </div>
        </>
    )
}

export default App;