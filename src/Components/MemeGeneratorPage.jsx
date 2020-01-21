import React, { Component } from 'react'
import NavBar from './NavBar'
import MemePage from './MemePage'

class MemeGeneratorPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MemePage/>
            </div>
        )
    }
}

export default MemeGeneratorPage
