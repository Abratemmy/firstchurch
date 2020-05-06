import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';
import about from '../images/about.png';
import Footer from '../components/footer';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import { Pastorall } from '../data';

const items= [
    {
        id: 1,
        name: 'all',
        url: image1,
        featured: false
    },

    {
        id: 2,
        name: 'all',
        url:image2,
        featured: false
    },

    {
        id: 3,
        name: 'all',
        url:image3,
        featured: false
    },

    {
        id: 4,
        name: 'pastor',
        url:image4,
        featured: true
    },

    {
        id: 5,
        name: 'all',
        url:image5,
        featured: false
    },

    {
        id: 6,
        name: 'pastor',
        url:image6,
        featured: true
    }


];


export class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }
        
        
    }

    render() {
        return (
            <div className="demo-tabs">
                <div className="" >
                    <img src={about} alt="image not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Our Gallery</p> 
                </div>

                <section  style={{position: 'relative', top: '-100px'}}>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}
                     ripple tabContainerStyle={{elevation:'0', borderBottomwidth:'0'}} className="gallerytab" >
                        <Tab className="gallery" style={{color:'blue',fontSize:'40px'}}>All</Tab>
                        <Tab>Ministers</Tab>
                        {/* <Tab></Tab> */}
                    </Tabs>
                    <div className="content">
                        {function tablet() {
                            if (this.state.activeTab == 0) {
                                return <div className="zero">  
                                        {items.map(item=>{
                                        return<div className="galleryimage " key={item.id}> 
                                            
                                            <img src={item.url} width="50%" height="100" alt="error"/>
                                </div>                         
                                
                              
                                
                    })}
                                    </div>
                            }
                            else if (this.state.activeTab == 1){
                                return<div className="one">
                                Hello from one
                                </div>
                            }
                            else{
                                return<div >No content</div>
                            }
                            
                        }.call (this)}
                    </div>

                   
                </section>
                <Footer />
            </div>    
        );
    }
        
    
}

export default Gallery
