import React, { Component } from 'react';
import about from '../images/about.png';
import Footer from '../components/footer';
import {Grid, Cell} from 'react-mdl';
import pastor1 from '../images/pastor1.jpeg';
import pastor2 from '../images/pastor2.jpeg';
import pastor3 from '../images/pastor3.jpeg';
import pastor4 from '../images/pastor4.jpeg';
import pastor5 from '../images/pastor5.jpeg';
import pastor6 from '../images/pastor6.jpeg';


export class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }    
    }
    render() {
        return (
            <div className="demo-tabs">
                <div className="" >
                    <img src={about} alt="not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Our Gallery</p> 
                </div>
                <div className="gallerytab " style={{padding:'0px 10% 0px 10%'}}>
            
                     <Grid >
                        <Cell col={4} className="img-container ">
                        <img src={pastor1} alt="not found" width="100%" height="350"className="img"/>
                        <h6 className=" room-link">picture</h6>

                        </Cell>

                        <Cell col={4} className="img-container ">
                        <img src={pastor2} alt="not found" width="100%"height="350" className="img"/>
                        <h6 className=" room-link">picture</h6>
                        </Cell>

                        <Cell col={4} className="img-container ">
                        <img src={pastor3} alt="not found" width="100%"height="350" className="img"/>
                        <h6 className=" room-link">picture</h6>

                        </Cell>

                        <Cell col={4} className="img-container ">
                        <img src={pastor4} alt="not found" width="100%"height="350" className="img"/>
                        <h6 className=" room-link">picture</h6>

                        </Cell>

                        <Cell col={4} className="img-container ">
                        <img src={pastor5} alt="not found" width="100%"height="350" className="img"/>
                        <h6 className=" room-link">picture</h6>

                        </Cell>

                        <Cell col={4} className="img-container ">
                        <img src={pastor6} alt="not found" width="100%"height="350" className="img"/>
                        <h6 className=" room-link">picture</h6>

                        </Cell>
                        
                    </Grid> 
                </div>
                <Footer />
            </div>    
        );
    }
        
    
}

export default Gallery
