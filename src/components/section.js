import React, { Component } from 'react'
// import { Cell, Grid } from 'react-mdl';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import {Link}  from 'react-router-dom';
import  Header  from '../components/header';

class Section extends Component {
    render() {
        return (
            <div >
                <div className="section-center" >
                    
                    <div className="services ">
                        <div >
                            <img src = {image2} className="service-img" alt="imageone" /></div>
                            <img src = {image1} className="service-img" alt="imagetwo"/>
                    </div>
                  
                    <div className="service-about">
                        <Header text="About us" title="Wh"overlay="y our chur"  title1="ch"subtitle="Mauris eleifend nisi justo, in volutpat magna scelerisque eget. Interdum et male suada fames ac ante ipsum primis. ">
                            <h5>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst. Phasellus egestas dignissim tellus. Proin sit amet euismod lacus, in auctor nisl. Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium eu sagittis. Rauris eleifend nisi justo, in volutpat magna scelerisque eget habitasse imperdiet elit eu nunc viverra.</h5>
                            <Link to='/about' className="btn-primary section-button">View More</Link>

                        </Header>
                       
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Section
