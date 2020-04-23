import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

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
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>May 10, 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>16:00 - 18:00</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                                <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold"}}> Lorem ipsum dolor sit amet </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                <p >Lorem Maecenas auctor magna massa, a congue dui lacinia ut</p>
                                 <h6  >Mauris eleifend nisi justo, in volutpat magna scelerisque eget. Interdum et male suada fames ac ante ipsum primis.</h6>
                            
                               </div>
                               </div>
                                </Cell>
                            <Cell col={2} ><div className="btn-primary">Join now</div></Cell>  
                             
                        </Grid>
                        <hr className="full-line"/>
                        <Grid>                            
                            <Cell col={3} style={{color: "white", textAlign:"center"}}>
                                <div className="event-date"  >
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>May 10, 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>16:00 - 18:00</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                                <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold"}}> Lorem ipsum dolor sit amet </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                <p >Lorem Maecenas auctor magna massa, a congue dui lacinia ut</p>
                                 <h6  >Mauris eleifend nisi justo, in volutpat magna scelerisque eget. Interdum et male suada fames ac ante ipsum primis.</h6>
                            
                               </div>
                               </div>
                                </Cell>
                            <Cell col={2} ><div className="btn-primary">Join now</div></Cell>   
                        </Grid>
                        <hr className="full-line"/>


                        <Grid>                            
                            <Cell col={3} style={{color: "white", textAlign:"center"}}>
                                <div className="event-date"  >
                                    <p style={{fontWeight: "bold", color: "white", fontSize: "20px"}}>May 10, 2020</p>
                                    <p style={{ paddingTop: "5px"}}><em>16:00 - 18:00</em></p>
                                </div>
                            </Cell>
                        
                            <Cell col={7}  > 
                            <div style={{}}>
                                <div className="line" style={{display:"flex"}}>
                                    <hr ></hr>
                                    <div className="event-topic" style={{paddingLeft:"16px", fontWeight:"bold"}}> Lorem ipsum dolor sit amet </div> 
                                </div>
                               <div className="" style={{paddingLeft: "50px", textAlign:"left"}}>
                                <p >Lorem Maecenas auctor magna massa, a congue dui lacinia ut</p>
                                 <h6  >Mauris eleifend nisi justo, in volutpat magna scelerisque eget. Interdum et male suada fames ac ante ipsum primis.</h6>
                            
                               </div>
                               </div>
                                </Cell>
                            <Cell col={2} ><div className="btn-primary">Join now</div></Cell>   
                        </Grid>
                        <hr className="full-line"/>
                    </div>
                        
                </div>
                    
                
            </div> 
        )
    }
}

export default Event
