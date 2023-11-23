import './SectionBorder.css';

import LongBorderImg from '../Media/SectionBorder.png'
import ShortBorderImg from '../Media/SectionBorder_Square.png'

const containerStyles = {
    normal: 'SectionBorderNormal',
    large: 'SectionBorderLarge'
}

const imageStyles = {
    long: 'SectionBorderImage',
    short: 'SectionBorderImageSquare'
}

const imageSources = {
    long: LongBorderImg,
    short: ShortBorderImg
}

const SectionBorder = (props) => {
    const borderImage = props.borderImage;
    const imageSource = imageSources[borderImage] || imageSources['long'];
    const imageStyle = imageStyles[borderImage] || imageStyles['long'];
    const containerStyle = containerStyles[props.borderMargin] || containerStyles['long'];

    return (
        <div className={containerStyle}>
            <img src={imageSource} alt='Section Border' className={imageStyle} draggable='false'></img>
        </div>
    )
}

export default SectionBorder;