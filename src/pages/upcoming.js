import React, { Component } from 'react';
import about from '../images/about.png';
import Footer from '../components/footer';
import { FaFileExcel } from 'react-icons/fa';

export class Upcoming extends Component {
    render() {
        return (
            <div>
                <div className="" >
                    <img src={about} alt="image not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Upcoming Event</p> 
                </div>

                <div className="upcomingevent"style={{ top:'-80px', position: 'relative'}}>
                    <div className="upcomingeve" >
                        <div className="">
                            <div className="" style={{position:'relative'}} >
                                <img src={about} alt="cannot seen image" width='95%' height="230" className="upcomingimg"style={{position:''}} />
                                <div className="upcomingbanner" style={{position:'absolute',top:'10px',marginLeft:'5px',
                                    backgroundColor: 'white', padding: '8px' }}>
                                    <div>JULY <br /><span style={{fontSize:'20px', padding: '8px 0px 8px 0px'}}>15</span>
                                    <br /><span style={{borderTop:' 1px solid rgb(71, 67, 67)'}} >8:00AM</span>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="eventevent">
                            <div style={{fontSize:'30px', paddingBottom:'10px'}}>Church Convention</div>
                            <p>Sunday, July 15, 2020
                            <br />8.00am - till dawn</p>
                            <p>Join us for our church convention at the church auditorium. you can come with friends, families.
                                Come and hear the world of the lord and be you will be blessed. The lord is waiting for you. 
                                There are plenty items 7. you will go back home filled spiritually and physically.</p>
                        </div>
                    </div>

                    {/* code for event 2 */}
                    <div className="upcomingeve" >
                    <div className="">
                        <div className="" style={{position:'relative'}} >
                            <img src={about} alt="cannot seen image" width='95%' height="230" className="upcomingimg"style={{position:''}} />
                            <div className="upcomingbanner" style={{position:'absolute',top:'10px',marginLeft:'5px',
                                backgroundColor: 'white', padding: '8px' }}>
                                <div>JULY <br /><span style={{fontSize:'20px', padding: '8px 0px 8px 0px'}}>15</span>
                                    <br /><span style={{borderTop:' 1px solid rgb(71, 67, 67)'}} >8:00AM</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="eventevent">
                        <div>Church Convention</div>
                        <p>Sunday, July 15, 2020
                        <br />8.00am - till dawn</p>
                        <p>Join us for our church convention at the church auditorium. you can come with friends, families.
                             Come and hear the world of the lord and be you will be blessed. The lord is waiting for you. 
                             There are plenty items 7. you will go back home filled spiritually and physically.</p>
                    </div>
                
                </div>

                </div>

                <Footer />
            </div>
        )
    }
}

export default Upcoming
