import './WYHAM.css'

import TopComponent from '../Components/TopComponent';
import Footer from '../Components/Footer'

function WYHAM() {
    const images = [
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-03-06-0017.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-03-08-0014-2.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-05-29-0506-2-2.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-06-09-0514.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-08-14-0603.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-08-18-0014.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-08-18-0017.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-08-19-0001.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2021-12-04-0113.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2022-02-25-0111.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2022-02-25-0116.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2022-02-26-0116.jpg',
        process.env.PUBLIC_URL + '/WYHAM Pictures/2022-02-26-0121.jpg',
    ];

    const navLevels = [
        'WYHAM'
    ];

    return (
        <div>
            <TopComponent navLevels= {navLevels}/>
            <div className='imageContainer'>
                {images.map((item, index) => {
                    return (<img src={item}></img>)
                })}
            </div>
            <Footer/>
        </div>
    );
}

export default WYHAM;