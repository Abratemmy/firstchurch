import React, { Component } from 'react'
import Background from '../components/background';
import Section from '../components/section';
import Donation from '../components/donation';
import Section1 from '../components/section1';
import Footer from '../components/footer';
import Mapcontact from '../components/mapcontact';
import Event from '../components/event';
import Landing from '../components/landing';
import Priest from '../components/priest';
import Blog from '../components/blog';

 class Home extends Component {
    render() {
        return (
            <div >
            <Landing/>
                <Background > </Background>
              <Section />
              <Section1 />
              <Donation />
              <Blog />
              <Event />
              <Priest />
              <Mapcontact />
             <Footer />
            </div>
        )
    }
}

export default Home
