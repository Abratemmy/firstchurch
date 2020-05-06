import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">About</button>
                <div class="dropdown-content">
                    <Link to="/about">Who We Are</Link>
                    <Link to="/about2">What We Believe</Link>
                    <Link to="/">Meeting Times</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        )
    }
}

export default Dropdown
