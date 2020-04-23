import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Dropdown from './dropdown';

class Landing1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
             isOpen: false,
        }
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-header1">
                    <Link to='/'>
                        <img src={logo} alt="temitipe" className="navbar-logo"></img>
                    </Link>
                </div>
                
                <div className="navbar-header2">

                    <ul className={this.state.isOpen ? "navbar-links show-navbar": "navbar-links"}  >
                        <li className="home-dropdown navbar-list">
                            <Link to ="/"><Dropdown/></Link>
                        </li>
                        <li className="navbar-list"><Link to ="/about"> about us</Link></li>
                        <li className="navbar-list"><Link to ="/ministry">Ministries</Link></li>
                        <li className="navbar-list"><Link to ="/audio" >Audio Sermon</Link></li>
                        <li className="navbar-list"><Link to ="/upcoming" >Upcoming event</Link></li>
                    </ul>

                    <button type="button" className="navbar-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="navbar-icon" />
                    </button>
                </div>
                    
               
            </div>
        )
    }
}

export default Landing1
