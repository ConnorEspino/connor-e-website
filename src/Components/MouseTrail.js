import React, { useEffect } from 'react';
import { useAnimate } from 'framer-motion';
import FloatingDiv from './FloatingDiv';

  //set visibility of trail dots based on mouse movement
  // mousepause?

const MouseTrail = ({sampleInterval = 10, maxSamples = 200}) => {
    const [scope, animate] = useAnimate();
    const kSampleInterval = sampleInterval;
    const kMaxSamples = maxSamples;
    let mCurrentSample = 0;
    let mTrailIds = [];
    let mNextDotIndex = 0;

    for (let i = 0; i < kMaxSamples; i++) {
        mTrailIds.push('trailItem' + i);
    }

    const handleAnimate = async (event) => {
        mCurrentSample--;
        if (mNextDotIndex !== kMaxSamples && mCurrentSample <= 0) {
            animate(`#trailItem${mNextDotIndex}`, {x: event.clientX, y: event.clientY, opacity: 1}, {duration: 0});
            mNextDotIndex++;
            mCurrentSample = kSampleInterval;
        }
        // console.log(mCurrentSample);
    };

    const handleScroll = async () => {
        for (let i = 0; i < kMaxSamples; i++) {
            animate(`#trailItem${i}`, {opacity: 0}, {duration: 0});
        }
        mNextDotIndex = 0;
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleAnimate);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleAnimate);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='cMouseTrail' ref={scope}>
            {mTrailIds.map((currentId) => {
                return <FloatingDiv id={currentId} key={currentId}/>
            })}
        </div>
    );
};

export default MouseTrail;
