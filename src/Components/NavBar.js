import './NavBar.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function NavBar({secondaryText}) {
    useEffect(() => {
        const navBar = document.getElementById('NavBar');
        shrinkNavBar(navBar);
        window.addEventListener('scroll', function() {
            shrinkNavBar(navBar);
        });
    });
    
    function lerp(start, end, t) {
        return start + t * (end - start);
    }
    
    function shrinkNavBar(navBar) {
        let percentScrolled = Math.min(window.scrollY / 300, 1);
        const minContainerSize = (document.getElementById('NavBarContainer').getBoundingClientRect().width / window.innerWidth) * 100;
    
        navBar.animate({ 
            width: `${lerp(100, minContainerSize, percentScrolled)}%`},
            { duration: 2400, fill: 'forwards' }
        );

        navBar.animate({ 
            marginTop: `${lerp(0, 1, percentScrolled)}vw`},
            { duration: 2400, fill: 'forwards' }
        );

        navBar.animate({ 
            marginLeft: `${lerp(0, 1, percentScrolled)}vw`},
            { duration: 2400, fill: 'forwards' }
        );

        navBar.style.width = `${lerp(100, minContainerSize, percentScrolled)}%`
        navBar.style.marginTop = `${lerp(0, 1, percentScrolled)}vw`
        navBar.style.marginLeft = `${lerp(0, 1, percentScrolled)}vw`
    }

    return (
        <div id='NavBar'>
            <div id='NavBarContainer'>
                <Link className='HomeButton' to='/'>CE</Link>
                {secondaryText && (
                    <div className='HomeButtonSecondary'>{secondaryText}</div>
                )}
            </div>
        </div>
    )
}

export default NavBar;