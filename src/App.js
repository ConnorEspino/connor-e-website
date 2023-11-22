import './App.css';

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SectionBorder from './Components/SectionBorder';

import SelfPortrait from './Media/AboutMePicture.png'

function App() {
    return (
    <div className='App'>
        <NavBar/>
        <div className='AppBodyContainer'>
            <div className='AppBody'>
                <SectionBorder/>
                <div className='AboutMe'>
                    <div className='AboutMeText'>
                        <div className='AboutMeTitle'>
                            Connor Espino
                        </div>
                        <div className='AboutMeDescription'>
                            Connor Espino is a cool and hip dude that does cool and hip stuff!
                        </div>
                    </div>
                    <img src={SelfPortrait} alt='Connor Espino Portrait' className='AboutMePicture'></img>
                </div>

                <SectionBorder/>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default App;
