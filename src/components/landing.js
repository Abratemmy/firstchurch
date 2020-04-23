import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import logo from '../images/logo.png';
import Dropdown from './dropdown';

export class Landing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen: false,
             isShow: false
        }
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showToggle = () =>{
        this.setState({
            isShow:!this.state.isShow
        })
    }
    render() {
        return (
            <nav className="navbar">
               <div className="nav-center">
                   {/* <div > */}
                   <div className="nav-image">
                        <Link to="/" className="nav-header">
                            <img src="https://cdn.pixabay.com/photo/2015/08/18/01/48/holy-893202__340.png" height="40"  alt="CHURECH"/>
                            {/* <p>My church</p> */}
                        </Link> 
                   </div>
                        <div className="parttwo">
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                    </button>
                    </div>
                       
                   {/* </div> */}
                   <span className="parttwo">
                   
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"} >
                        <li><Link to ="/about"> <Dropdown /></Link></li>
                        <li ><Link to ="/ministry">Ministries</Link></li>
                        <li ><Link to ="/audio" >Audio Sermon</Link></li>
                        <li ><Link to ="/gallery" >Gallery</Link></li>
                        <li ><Link to ="/upcoming" >Event</Link></li>
                        <li ><Link to ="/upcoming" >Contact</Link></li>
                    </ul>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Landing
