import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';

class Event extends Component {
    render() {
        return (
            <div className="event">
                <div className="event-text">
                    <h4>UPCOMING EVENT</h4>
                    <h2>DON'T MISS YOUR CHANCE</h2>
                    <p>Maecenas auctor magna massa, a congue dui lacinia ut</p>
                
                    <div class="dotted" style={{color:"white"}}className="event1">   
                        <Grid  >                         
                            <Cell col={3} style={{color: "white", textAlign:"center"}}>
                                <div className="event-date"  >
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>Dec 14-16 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>7.30PM prompt</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                                <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold", fontSize:'20px'}}> 2020 CHANGE EXPERIENCE CANADA CONFERENCE <br />
                                        <p style={{fontStyle:'italic',textAlign:'left' ,color: 'rgb(245, 245, 245)'}}>EGLISE DU ROYAUME DU CHRIST</p>
                                    </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                 <h6  >This event is taking place at Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada <br /> Tel : 4186444000</h6>
                            
                               </div>
                               </div>
                            </Cell>
                            <Cell col={2} ><div className="btn-primary"><Link to="/upcoming" className="eventlinks">VIEW MORE</Link> </div></Cell>  
                             
                        </Grid>
                        <hr className="full-line"/>
                        <Grid>                            
                            <Cell col={3} style={{color: "white", textAlign:"center"}}>
                                <div className="event-date"  >
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>Dec 29, 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>8:00am</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                                <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold", fontSize:'20px'}}> HEAL THE LAND <br />
                                        <p style={{fontStyle:'italic',textAlign:'left' ,color: 'rgb(245, 245, 245)'}}></p>
                                    </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                 <h6  >Tuesday 29 Dec, 2020</h6>
                            
                               </div>
                               </div>
                            </Cell>
                            <Cell col={2} ><div className="btn-primary"><Link to="/upcoming" className="eventlinks">VIEW MORE</Link> </div></Cell>    
                        </Grid>
                        <hr className="full-line"/>


                        <Grid>                            
                            <Cell col={3} style={{color: "white", textAlign:"center"}}>
                                <div className="event-date"  >
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>April 28, 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>16:00 - 18:00</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                            <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold", fontSize:'20px'}}> BENIN OUTREACH <br />
                                        <p style={{fontStyle:'italic',textAlign:'left' ,color: 'rgb(245, 245, 245)'}}></p>
                                    </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                 <h6  >1st January, 2021</h6>
                                 <p> By Prophet Immanuel Godfrey</p>
                            
                               </div>
                               </div>
                            </Cell>
                                <Cell col={2} ><div className="btn-primary"><Link to="/upcoming" className="eventlinks">VIEW MORE</Link> </div></Cell> 
                        </Grid>
                        <hr className="full-line"/>
                    </div>
                        
                </div>
                    
                
            </div> 
        )
    }
}

export default Event
