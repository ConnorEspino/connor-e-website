import './App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SectionBorder from './Components/SectionBorder';
import MouseTrail from './Components/MouseTrail';

import SelfPortrait from './Media/AboutMePicture.png'
import WYHAMThumbnail from './Media/WYHAMThumbnail.jpg'
import EDPThumbnail from './Media/EDPThumbnail.png'
import OSEDThumbnail from './Media/OSEDThumbnail.png'

function App() {
    const [mMouseTrailEnabled, setMouseTrailEnabled] = useState(false);
    
    const ThumbnailOverlay = ({ text }) => (
        <div className='ThumbnailOverlay'>
            {text}
        </div>
    );

    useEffect(() => {
        movePictures();
        window.addEventListener('scroll', function() {
            movePictures();
        });
    });

    //TODO: Move lerp to math file
    function lerp(start, end, t) {
        return start + t * (end - start);
    }

    function movePictures() {
        let percentScrolled = window.scrollY / window.innerHeight;

        for(const image of document.querySelectorAll('.Thumbnail')) {
            let yStart = parseFloat(image.dataset.ystart);
            let yEnd = yStart - 25;
            image.animate({ 
                transform: `translate(0%, ${lerp(yStart, yEnd, percentScrolled)}%)`},
                { duration: 2400, fill: 'forwards' }
            );
            image.style.transform = `translate(0%, ${lerp(yStart, yEnd, percentScrolled)}%)`
        }
    }

    return (
    <div className='App'>
        {/*https://codepen.io/falldowngoboone/pen/PwzPYv*/}
        {mMouseTrailEnabled && (<MouseTrail/>)}
        <NavBar/>
        <div className='AppBodyContainer'>
            <div className='AppBody'>
                <SectionBorder borderImage='long' borderMargin='normal'/>
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
                <div onClick={() => setMouseTrailEnabled(!mMouseTrailEnabled)}>
                    <SectionBorder borderImage='short' borderMargin='large'/>
                </div>
                <div className='ThumbnailTrack'>
                    <div className='ThumbnailContainer'>
                        <Link to='/WYHAM'>
                            <img src={WYHAMThumbnail} alt='WYHAM' className='Thumbnail' data-ystart='-15'></img>
                            <ThumbnailOverlay text='WYHAM'/>
                        </Link>
                    </div>
                    <div className='ThumbnailContainer'>
                        <Link to='/EDP'>
                            <img src={EDPThumbnail} alt='EDP' className='Thumbnail' data-ystart='-10'></img>
                            <ThumbnailOverlay text='EDP'/>
                        </Link>
                    </div>
                    <div className='ThumbnailContainer'>
                        <Link to='/OSED'>
                            <img src={OSEDThumbnail} alt='OSED' className='Thumbnail' data-ystart='15'></img>
                            <ThumbnailOverlay text='OSED'/>
                        </Link>
                    </div>

                </div>

                <SectionBorder borderImage='long' borderMargin='normal'/>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default App;
