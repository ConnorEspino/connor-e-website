import NavBar from './NavBar'
import MouseTrail from './MouseTrail';

// TODO: Change to type script to force navLevels to be an array of strings
const TopComponent = ({navLevels}) => {
    const kCurrentMTE = localStorage.getItem('lMouseTrailEnabled') === 'true';

    return (
        <div className='topComponent'>
            {kCurrentMTE && (<MouseTrail/>)}
            <NavBar secondaryText={navLevels}/>
        </div>
    );
};

export default TopComponent;