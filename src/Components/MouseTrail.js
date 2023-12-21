import './MouseTrail.css'

import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';

import FloatingDiv from './FloatingDiv';

const MouseTrail = ({sampleInterval = 1, maxElements = 100}) => {
    const [scope, animate] = useAnimate();
    const [mTrailIds, setTrailIds] = useState([]);
    let mMaxElements = maxElements;
    let mSampleInterval = sampleInterval;
    let mCurrentSample = 0;
    let mNextDotIndex = 0;

    const handleAnimate = (event) => {
        mCurrentSample--;
        if (mNextDotIndex < mMaxElements && mCurrentSample <= 0) {
            try {
                animate(`#trailItem${mNextDotIndex}`, {x: event.clientX, y: event.clientY, opacity: 1}, {duration: 0});
            } catch (e) {
                console.warn(e)
                // console.log('Next Dot Index: ' + mNextDotIndex);
                // console.log('Current Sample: ' + mCurrentSample);
            }
            mNextDotIndex++;
            mCurrentSample = mSampleInterval;
        }
        // console.log(mCurrentSample);
    };

    const handleScroll = () => {
        mNextDotIndex = 0;
        try {
            const numElements = document.querySelectorAll('[id^="trailItem"]').length;
            for (let i = 0; i < numElements; i++) {
                animate(`#trailItem${i}`, {opacity: 0}, {duration: 0});
            }
        } catch (e) {
            console.warn(e);
        }
    };

    const changeMaxElements = (value) => {
        setTrailIds((prevTrailIds) => {
          const currentTrailLength = prevTrailIds.length;
      
          if (value > currentTrailLength) {
            let newArr = [...prevTrailIds];
            for (let i = currentTrailLength; i < value; i++) {
              const newKey = 'trailItem' + i;
              if (!newArr.includes(newKey)) {
                newArr.push(newKey);
              }
            }
            return newArr;
          }
          return prevTrailIds;
        });
      
        mMaxElements = value;
        handleScroll();
      };
      

    useEffect(() => {
        window.addEventListener('mousemove', handleAnimate);
        window.addEventListener('scroll', handleScroll);
        changeMaxElements(mMaxElements);

        return () => {
            window.removeEventListener('mousemove', handleAnimate);
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className='mouseTrail' ref={scope}>
            {mTrailIds.map((currentId) => <FloatingDiv key={currentId} id={currentId} content={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAAyAAAAMgAY/rnrQAAAAd0SU1FB+cMEwUNEZkcCL4AAAABb3JOVAHPoneaAAAAT0lEQVRIx+3UMQ6AMAwEwfz/04OEoKAkS0HhS32jyHKylhWjEkSCSBAJIkEkiASRIBLP6n3e70Ea4lncH+JVCsC3S/2HhxXv0H+oyWSylQPLo6JeS9zD/gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xOVQwNToxMzoxNiswMDowMOYG0ewAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTlUMDU6MTM6MTYrMDA6MDCXW2lQAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTEyLTE5VDA1OjEzOjE3KzAwOjAwZjlDOwAAAABJRU5ErkJggg=='}/>)}
            <div className='mouseTrailValues'>
                <label>
                    Sample Rate: <input className='mouseTrailInput' name='sampleRate' defaultValue={mSampleInterval} onChange={(e) => {mSampleInterval = e.target.value}}/>
                </label>
                <label>
                    Max Trail Objects: <input className='mouseTrailInput' name='sampleRate' defaultValue={mMaxElements} onChange={(e) => {changeMaxElements(e.target.value)}}/>
                </label>
            </div>
        </div>
    );
};

export default MouseTrail;
