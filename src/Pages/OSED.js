import './OSED.css'

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function OSED() {
    return (
        <div className='OSED'>
            <NavBar secondaryText='> OSED'/>
            <div className='OSEDContainer'>
                <div className='OSEDTitle'> One Second Every Day </div>
                <div className='TimelineContainer'>
                    <div className='Timeline'>

                    </div>
                    <div className='Frames'>
                        <div className='FrameContainer'>
                            <iframe className='VideoFrame' title='2018' src="https://player.vimeo.com/video/382834698" frameborder="0">
                            </iframe>
                        </div>
                        <div className='FrameContainer'>
                            <iframe className='VideoFrame' title='2019' src="https://player.vimeo.com/video/383409297" frameborder="0">
                            </iframe>
                        </div>
                        <div className='FrameContainer'>
                            <iframe className='VideoFrame' title='2020' src="https://player.vimeo.com/video/541100531" frameborder="0">
                            </iframe>
                        </div>
                        <div className='FrameContainer'>
                            <iframe className='VideoFrame' title='2021' src="https://player.vimeo.com/video/661563462" frameborder="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OSED;