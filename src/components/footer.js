import React, { Component } from 'react';
import {MdLocationOn} from 'react-icons/md';
import {IoIosCall} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {Grid, Cell} from 'react-mdl';
import Header from '../components/header';

class Footer extends Component {
    render() {
        return (
            <div className="footergeneral">
                <div className="footer">
                    <Grid className="footer-info">
                        <Cell col={7}>
                            <h2 >kin<span className="footer-header">gdom of chr</span>ist</h2>
                            <p>Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique nulla tincidunt quis dolor fermentum risusstibulum rhoncus dolor fermentum risusVestibulumdui ut pellentesque congue. Mauris tristique nulla tincidunt quis rhoncus dui ut pellentesque congue. Ttristique nulla tincidunt quis dolor ferm rhoncus dolorrhoncus dolorentum. risusVestibulum rhoncus congue.</p>
                        </Cell>

                        <Cell col={5} className="footer-address">
                            <p><span><MdLocationOn className="footer-icon"/></span>AJ - 325, SEC - 2, SALTLAKE, KOLKATA - 700091</p>
                            <p><span><MdEmail className="footer-icon"/></span>cross@church.com</p>
                            <p><span><IoIosCall className="footer-icon"/></span>0202 00 2365</p>
                        </Cell>
                    </Grid>
                </div>

                <div className="footerbottom">
                    <p>2020 All Right Reserved. <span className=""> Kingdom of Christ Church</span></p></div>
            </div>
        )
    }
}

export default Footer
