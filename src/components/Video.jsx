import React from 'react';
import './css/video.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';


const Video = (props) => (
    
        
        <ParallaxProvider>
            <ParallaxBanner
                className="videocontainer"
                style={{ aspectRatio: '2 / 1' }}
                layers={[
                    {
                        speed: -30,
                        children: (
                            <video
                                className="video text-center"
                                autoPlay
                                loop
                                playsInline
                                preload="auto"
                                muted
                                // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea-720.mp4"
                                src='https://media.istockphoto.com/videos/modern-thank-you-line-icon-animation-on-white-background-video-id1213707743'
                                
                                alt='thank you'

                            // src="pexels-thirdman-5981416.mp4"
                            />
                        ),
                    },
                ]}
            >
                {/* <div className="text2">
                    <span className="bye">Thank you!</span>
                </div> */}
            </ParallaxBanner>
        </ParallaxProvider>
    
);

export default Video;
