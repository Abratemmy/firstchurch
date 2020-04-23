import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dropdown extends Component {
    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">About</button>
                <div class="dropdown-content">
                    <Link to="/">link 1</Link>
                    <Link to="/">link 2</Link>
                    <Link to="/">link 3</Link>
                    <Link to="/">link 4</Link>
                </div>
            </div>
        )
    }
}

export default Dropdown
