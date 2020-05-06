import React, { Component } from 'react'
import Background from '../components/background';
import Section from '../components/section';
import Donation from '../components/donation';
import Section1 from '../components/section1';
import Mapcontact from '../components/mapcontact';
import Event from '../components/event';
import Priest from '../components/priest';
import Blog from '../components/blog';
import Footer from '../components/footer';
// import {MdLocationOn} from 'react-icons/md';
// import {IoIosCall} from 'react-icons/io';
// import {MdEmail} from 'react-icons/md';
// import {Grid, Cell, Footer} from 'react-mdl';


 class Home extends Component {
    render() {
        return (
            <div >
                <Background > </Background>
              <Section />
              <Section1 />
              <Donation />
              <Blog />
              <Event />
              <Priest />
              <Mapcontact />
              <Footer/>

            </div>
           
        )
    }
}

export default Home
