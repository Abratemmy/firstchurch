import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
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
                        <NavLink to="/" className="nav-header" >
                            <img src="https://cdn.pixabay.com/photo/2015/08/18/01/48/holy-893202__340.png" height="40"  alt="CHURECH"/>
                            {/* <p>My church</p> */}
                        </NavLink> 
                   </div>
                        <div className="parttwo">
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                    </button>
                    </div>
                       
                   {/* </div> */}
                   <span className="parttwo">
                   
                    <ul className={this.state.isOpen ? "nav-links show-nav": "nav-links"} >
                        <li ><NavLink to ="/" className="active" >Home</NavLink></li>
                        <li><NavLink to ="/about"> <Dropdown /></NavLink></li>
                        <li ><NavLink to ="/audio" >Audio Sermon</NavLink></li>
                        <li ><NavLink to ="/gallery" >Gallery</NavLink></li>
                        <li ><NavLink to ="/upcoming" >Event</NavLink></li>
                        <li ><NavLink to ="/contact" >Contact</NavLink></li>
                    </ul>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Landing
