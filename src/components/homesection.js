
import React, { Component } from 'react';
import church from '../images/church.PNG';
import {Link} from 'react-router-dom';
import {CardTitle} from 'react-mdl';
// import src from '*.bmp';

class Homesection extends Component {
   
    render() {
        return (
            <div className="services">
                <div className="services-center">
                   <div className="service">    
                       <h6>About us</h6>
                       <span>Why our church</span>
                       <p>Lorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elit,</p>
                        
                            <CardTitle >
                                <p className="service-p">Lorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elit Lorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elit",</p>
                            </CardTitle>
                      
                    
                        <Link to='/about' className="btn-primary">View more</Link> 
                   

                     </div><div className="service">
                       <h6>Our pastors</h6>
                       <span>Meet our priest</span>
                       <p>Lorem ipsum dolor sit amet adisping elitLorem ipsum dolor sit amet adisping elit"</p>    
                        <CardTitle >
                            <img src = {church} />
                        </CardTitle>  
                     <Link to='/ministry' className="btn-primary">View more</Link>
                    </div> 
                </div>  

                {/* <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
             </Card> */}

             </div>

           

            

        )
    }
}

export default Homesection
