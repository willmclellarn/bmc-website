import React, { useEffect, useState, useContext } from 'react'
import About from './About'
import Programs from './Programs'
import Docs from './Documents'
import Contact from './Contact'

function ContentFactory({ id, isMobile }) {

    switch (id) {
        case 'about':
            return <About />
        case 'contact':
            return <Contact />
        case 'programs':
            return <Programs />
        case 'docs':
            return <Docs />
        default:
            return (<div></div>);
    }
}

export default ContentFactory