import './EDP.css'

import TopComponent from '../Components/TopComponent';
import Footer from '../Components/Footer'

// TODO: Implement LazyFrame for page load
// https://github.com/vb/lazyframe
// import LazyFrame from 'lazyframe';

function EDP() {
    const navLevels = [
        'EDP'
    ];

    return (
        <div>
            <TopComponent navLevels= {navLevels}/>
            <iframe title='Next - A No Mans Sky Cinematic' width='420' height='315'
                src="https://www.youtube.com/embed/Dh4XVB24Dt8">
            </iframe>
            <iframe title='Isolated - A No Mans Sky Cinematic' width='420' height='315'
                src="https://www.youtube.com/embed/9SnmhcXApvc">
            </iframe>
            <iframe title='Ive Seen Things - A No Mans Sky Cinematic' width='420' height='315'
                src="https://www.youtube.com/embed/3dNnQMWpV_k">
            </iframe>
            <iframe title='Origins - A No Mans Sky Cinematic' width='420' height='315'
                src="https://www.youtube.com/embed/cAahiZQCTBY">
            </iframe>
            <Footer/>
        </div>
    );
}

export default EDP;