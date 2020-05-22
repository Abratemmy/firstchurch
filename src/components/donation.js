import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link } from 'react-router-dom';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
class Donation extends Component {
    render() {
        return (
            <div >
                <div className="donation">
                    <Grid>
                        <Cell col={7} >
                            <div >
                                <div className="donation-one">EVERYTHING IS <br /> POSSIBLE WITH GOD</div>
                                <p className="donationp">Mauris eleifend nisi justo, in volutpat magna scelerisque eget. Interdum et male suada fames ac ante ipsum primis in faucibus. </p>
                            </div>
                            <Grid>
                                <Cell col={4}>
                                    <img src={image9} alt="error" width="100%" height="230" className="donation-image" />
                                </Cell>
                                <Cell col={8}>
                                    <h4>THE ORPHANS</h4>
                                    <p>Your donation can go far and god bless you</p>
                                    <h6>Mauris eleifend nisi justo, in volutpat magna sceleri sque eget. Interdum et malesuada</h6>
                                </Cell>
                                <Cell col={4}>
                                    <img src={image10} alt="error" width="100%" height="230" className="donation-image"/>
                                </Cell>
                                <Cell col={8}>
                                    <h4>THE POOR</h4>
                                    <p>Your donation can go far and god bless you</p>
                                    <h6>Mauris eleifend nisi justo, in volutpat magna sceleri sque eget. Interdum et malesuada</h6>
                                </Cell>
                            </Grid>
                        </Cell>
                        <Cell col={5}>
                            {/* <img src={image11} alt="image-error" width="100%" height="640"/> */}
                        </Cell>
                    </Grid>
                </div>
                <Grid className="donation-section">
                    <Cell col={9} className="donation-cell">
                        <h6>MAKE A DONATION</h6>
                        <div className="donation-one">EVERY YOUR PENNY CAN HELP US</div>
                        <p>Curabitur egestas justo eget ante eleifend mattis. In blandit tempus sapien, ac rhoncus dolor faucibus vel. Nullam vehicula arcu ligula, quis auctor nibh vestibulum non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </Cell>
                    <Cell col={3} className="donation-button">
                        <Link to='/donation' className="btn-primary donation-button">Donation</Link>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Donation
