import './App.css';
import React, { useEffect } from 'react';

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import SectionBorder from './Components/SectionBorder';
import { Link } from 'react-router-dom';

import SelfPortrait from './Media/AboutMePicture.png'
import WYHAMThumbnail from './Media/WYHAMThumbnail.jpg'
import EDPThumbnail from './Media/EDPThumbnail.png'
import OSEDThumbnail from './Media/OSEDThumbnail.png'

function App() {
    useEffect(() => {
        movePictures();
        window.addEventListener('scroll', function() {
            movePictures();
        });
    });

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
                { duration: 1200, fill: 'forwards' }
            );
            image.style.transform = `translate(0%, ${lerp(yStart, yEnd, percentScrolled)}%)`
        }
        //console.log('% Of screen scrolled:', percentScrolled);
    }
    
    const ThumbnailOverlay = ({ text }) => (
        <div className='ThumbnailOverlay'>
          {text}
        </div>
      );

    return (
    <div className='App'>
        <NavBar/>
        <div className='AppBodyContainer'>
            <div className='AppBody'>
                <SectionBorder borderImage='long'/>
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
                <SectionBorder borderImage='short'/>
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

                <SectionBorder borderImage='long'/>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default App;
