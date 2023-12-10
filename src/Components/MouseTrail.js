import './MouseTrail.css'

import React, { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';

import FloatingDiv from './FloatingDiv';

const MouseTrail = ({sampleInterval = 10, maxElements = 200}) => {
    const [scope, animate] = useAnimate();
    const [mTrailIds, setTrailIds] = useState([]);
    const [mMaxElements, setMaxElements] = useState(maxElements);
    let mSampleInterval = sampleInterval;
    let mCurrentSample = 0;
    let mNextDotIndex = 0;

    const handleAnimate = async (event) => {
        mCurrentSample--;
        if (mNextDotIndex < mMaxElements && mCurrentSample <= 0) {
            console.log(mMaxElements)
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

    const handleScroll = async () => {
        try {
            //mTrailIds is empty even though it's set in changeMaxElements
            //Could be problem with accesing useState variable in async function
            console.log(mTrailIds)
            for (let i = 0; i < mTrailIds.length; i++) {
                animate(`#trailItem${i}`, {opacity: 0}, {duration: 0});
            }
            mNextDotIndex = 0;
        } catch (e) {
            console.warn(e);
        }
    };

    const changeMaxElements = (value) => {
        const currentTrailLength = mTrailIds.length;

        if (value > currentTrailLength) {
            let newArr = [...mTrailIds];
            for (let i = currentTrailLength; i < value; i++) {
                const newKey = 'trailItem' + i;
                if (!newArr.includes(newKey)) {
                    newArr.push(newKey);
                }
            }
            setTrailIds(newArr);
        }
        handleScroll();
        setMaxElements(value);
    }

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
            {mTrailIds.map((currentId) => <FloatingDiv key={currentId} id={currentId}/>)}
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
