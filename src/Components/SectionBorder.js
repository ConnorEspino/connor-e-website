import './SectionBorder.css';
import BorderImg from '../Media/SectionBorder.png'

function SectionBorder() {
    return (
        <div className='SectionBorder'>
            <img src={BorderImg} alt='Section Border' className='SectionBorderImage'></img>
        </div>
    )
}

export default SectionBorder;