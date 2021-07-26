import React from 'react'
import Common from './Common'
import web from '../src/images/abot.jpeg'

function About() {
    return (
        <div>
            <Common name='Grow your business with' 
            imgsrc={web} 
            visit="/contact"
            btname="Contact Now" />
        </div>
    )
}

export default About
