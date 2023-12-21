import NavBar from './NavBar'
import MouseTrail from './MouseTrail';

const TopComponent = ({navSecondaryText}) => {
    const kCurrentMTE = localStorage.getItem('lMouseTrailEnabled') === 'true';

    return (
        <div className='topComponent'>
            {kCurrentMTE && (<MouseTrail/>)}
            <NavBar secondaryText={navSecondaryText}/>
        </div>
    );
};

export default TopComponent;