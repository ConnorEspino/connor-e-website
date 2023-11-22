import './OSED.css'

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function OSED() {
    return (
        <div>
            <NavBar secondaryText='> OSED'/>
            <iframe title='2018' width='1920' height='1080' src="https://player.vimeo.com/video/382834698">
            </iframe>
            <iframe title='2019' width='1920' height='1080' src="https://player.vimeo.com/video/383409297">
            </iframe>
            <iframe title='2020' width='1920' height='1080' src="https://player.vimeo.com/video/541100531">
            </iframe>
            <iframe title='2021' width='1920' height='1080' src="https://player.vimeo.com/video/661563462">
            </iframe>
            <Footer/>
        </div>
    );
}

export default OSED;