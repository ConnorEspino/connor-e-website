import './SectionBorder.css';

import LongBorderImg from '../Media/SectionBorder.png'
import ShortBorderImg from '../Media/SectionBorder_Square.png'

const styles = {
    long: { width: '20vw', height: '1vw' },
    short: { width: '1vw', height: '1vw' },
}

function getStyle(arg) {
    switch(arg) {
        case 'long':
            return LongBorderImg;
        case 'short':
            return ShortBorderImg;
        default:
            return LongBorderImg;
    }
}

const SectionBorder = (props) => {
    const arg = props.borderImage;
    const imageSource = getStyle(arg);
    const style = styles[arg] || styles['long'];

    return (
        <div className='SectionBorder'>
            <img src={imageSource} alt='Section Border' className='SectionBorderImage' draggable='false' style={style}></img>
        </div>
    )
}

export default SectionBorder;