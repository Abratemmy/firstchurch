import React, { Component } from 'react';
import about from '../images/about.png';
import Footer from '../components/footer';
import { Grid, Cell } from 'react-mdl';

export class Upcoming extends Component {
    render() {
        return (
            <div>
                <div className="" >
                    <img src={about} alt="not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Upcoming Event</p> 
                </div>

                <div className="upcomingevent"style={{ top:'-80px', position: 'relative',color:'black'}}>
                    <div className="upcomingeve">
                        <div className="">
                            <div className="" style={{position:'relative'}} >
                                <img src={about} alt="not found" width='95%' height="330" className="upcomingimg"style={{position:''}} />
                                <div className="upcomingbanner" style={{position:'absolute',top:'10px',marginLeft:'5px',
                                    backgroundColor: 'white', padding: '8px' }}>
                                    <div>Dec <br /><span style={{fontSize:'20px', padding: '8px 0px 8px 0px'}}>14-18</span>
                                    <br /><span style={{borderTop:' 1px solid rgb(71, 67, 67)'}} >2020</span>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="eventevent">
                            <div style={{fontSize:'20px', paddingBottom:'10px', lineHeight:'35px'}}>2020 CHANGE EXPERIENCE CANADA CONFERENCE
                                <br /><span style={{fontSize:'20px', fontStyle:'italic', textTransform:'capitalize'}}>EGLISE DU ROYAUME DU CHRIST</span>
                            </div>
                            <div > Speakers are: <span>Prophet Immanuel Godfrey <br />Rev. Martins Godson <br /> Pastor Bonnie Duell</span></div>
                            
                            <Grid>
                                <Cell col={5}>
                                    <p>Date : <span> Wed - Fri,<br />14- 16 Dec</span><br />Time: <span>7:30PM</span></p>
                                </Cell>
                                <Cell col={7}>
                                    <p>Date : <span> Saturday <br /> 17 Dec</span><br />Time: <span>11:30PM (Street evangelism)</span></p>
                                </Cell>
                                <Cell col={12}>
                                    <p>Date : <span>Sunday 18 Dec<br /> Time: <span>11am</span></span></p>
                                </Cell>
                            </Grid>
                            <p>This event is taking place at Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada <br /> Tel : 4186444000</p>
                        </div>
                    </div>

                    {/* code for event 2 */}
                    <div className="upcomingeve" >
                    <div className="">
                        <div className="" style={{position:'relative'}} >
                            <img src={about} alt="not found" width='95%' height="230" className="upcomingimg"style={{position:''}} />
                            <div className="upcomingbanner" style={{position:'absolute',top:'10px',marginLeft:'5px',
                                backgroundColor: 'white', padding: '8px' }}>
                                <div>DEC <br /><span style={{fontSize:'20px', padding: '8px 0px 8px 0px'}}>29</span>
                                    <br /><span style={{borderTop:' 1px solid rgb(71, 67, 67)'}} >8:00AM</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="eventevent">
                        <div style ={{ fontSize:'20px', paddingBottom:'10px', lineHeight:'35px'}} >HEAL THE LAND</div>
                        <p>Sunday, July 15, 2020 
                        <br />8.00am </p>
                        <p>By prophet Immanuel Godfrey</p>
                        <p>Join us for our church convention at the church auditorium. you can come with friends, families.
                             Come and hear the world of the lord and be you will be blessed. The lord is waiting for you. 
                             There are plenty items 7. you will go back home filled spiritually and physically.</p>
                    </div>
                
                </div>


                <div className="upcomingeve" >
                    <div className="">
                        <div className="" style={{position:'relative'}} >
                            <img src={about} alt="not found" width='95%' height="230" className="upcomingimg"style={{position:''}} />
                            <div className="upcomingbanner" style={{position:'absolute',top:'10px',marginLeft:'5px',
                                backgroundColor: 'white', padding: '8px' }}>
                                <div>APRIL <br /><span style={{fontSize:'20px', padding: '8px 0px 8px 0px'}}>28</span>
                                    <br /><span style={{borderTop:' 1px solid rgb(71, 67, 67)'}} >8:00AM</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="eventevent">
                        <div style ={{ fontSize:'20px', paddingBottom:'10px', lineHeight:'35px'}} >EVANGELISM TRAINING</div>
                        <p>Date: <span style={{fontWeight: 'bold'}}>April 28, 2020.</span> Time: <span style={{fontWeight: 'bold'}}>5.30pm </span>
                        <br />By Pastor John</p>

                        <p>Date: <span style={{fontWeight: 'bold'}}>April 29, 2020.</span> Time: <span style={{fontWeight: 'bold'}}>10.00am </span>
                        <br />By Rev. Martins Godson</p>

                        <p>Date: <span style={{fontWeight: 'bold'}}>April 30, 2020.</span> Time: <span style={{fontWeight: 'bold'}}>9.00am </span>
                        <br />By Pastor Damien</p>
                        
                        <p>Join us Evant Location El-Dorado Beach PLM Akpakpa Contonou Benin. </p>
                        <p>Contact: <span style={{fontWeight:'bold'}}>22998724846</span> <br />
                        Email:<span style={{fontWeight:'bold'}}>kingdomofchristchurch@yahoo.com</span><br />
                        Cost: <span style={{fontWeight:'bold'}}>Free</span>
                        
                        </p>

                    
                    </div>
                
                </div>


                </div>

                <Footer />
            </div>
        )
    }
}

export default Upcoming
