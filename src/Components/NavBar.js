import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar({secondaryText}) {
    return (
        <div className='NavBarContainer'>
            <Link className='HomeButton' to='/'>CE</Link>
            {secondaryText && (
                <div className='HomeButtonSecondary'>{secondaryText}</div>
            )}
        </div>
    )
}

export default NavBar;