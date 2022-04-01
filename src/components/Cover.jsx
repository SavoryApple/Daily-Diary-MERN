import React from 'react'
import './css/cover.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const Cover = (props) => {
    return (
        <>
            <ParallaxProvider>
                <ParallaxBanner
                    style={{ aspectRatio: '2/1' }}
                    layers={[


                        {
                            image: 'https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                            speed: -15,

                        },

                    ]}
                />
                <div className="text1">
                    <span className="planner">Personal Calendar</span>
                </div>


            </ParallaxProvider>
        </>
    )
}

export default Cover;