import React, { Component } from 'react';
import Slider from 'react-slick';
import pastor1 from '../images/pastor1.jpeg';
import pastor2 from '../images/pastor2.jpeg';
import pastor3 from '../images/pastor3.jpeg';
import pastor4 from '../images/pastor4.jpeg';
import pastor5 from '../images/pastor5.jpeg';
import pastor6 from '../images/pastor6.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardTitle, CardImg, CardActions, CardText } from 'react-mdl';
import Header from '../components/header';

const photos=[
    {
        id: 1,
        name: 'Prophet Immanuel Godfrey',
        url: pastor4,
        position: 'General overseer'
    },
    {
        id: 2,
        name: 'Rev. Martins O.',
        url: pastor3,
        position: 'vice president'
    },
    {
        id: 3,
        name: 'Pas Anokwu Clifford chikezie',
        url: pastor1,
        position:'pastor'
    },
    {
        id: 4,
        name: 'Pas. Ikechukwu Israel ',
        url: pastor2,
        position:'pastor'
    },
    {
        id: 5,
        name: 'photo 3',
        url: pastor5,
        position: 'pastor'
    },
    {
        id: 6,
        name: 'Past. Ugwiyi Damien Chinonso',
        url: pastor6,
        position: 'pastor'
    }
]


class Priest extends Component {
    appendDots=(dots)=>{
        return(
            <div style={{backgroundColor:'#eee'}}>
                <ul style={{margin: "3px"}}>{dots} </ul>
            </div>
        )

    }
    render() {
        const settings = {
            dots: true,
            dotsClass:"slick-dots slick-thumb",
            fade: false,
            arrows: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: false,
            autoplaySpeed: 5000,
            className: "priest-slides",
            // appendDots:{appendDots},
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    
                  }
                },
               
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        }
        return (
            <div className="priests" style={{ textAlign:'center', paddingTop:'40px'}}>
                <Header text="our priests" title="me" overlay="et our prie" title1="sts" subtitle="In case you don't know, these are the priests God is using to build nations">
                    
                </Header>
                {/* <Card> */}
                <Slider {...settings} className="priest-slider">
                   {photos.map(photos=>{
                        return<div className="priest-card" key={photos.id}> 
                        <Card shadow={0} style={{width: '256px', height: '300px', margin: 'auto', position: 'relative'}}>
                            <img src={photos.url}  alt="error" className=""style={{width: '256px', height: '256px', margin: 'auto', position: 'relative'}}/>
                            <CardTitle expand />
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)',position:'absolute', top:'220px',
                                display: 'flex', justifyContent: 'center' }}>
                                <span style={{color: 'rgb(248, 51, 248)', fontSize: '24px', fontWeight: "bold",}}>
                                    {photos.position}
                                    <div style={{fontSize:'14px', color:'black', paddingTop: '20px', paddingBottom:'40px'}}>{photos.name}</div>
                                </span>
                            </CardActions>
                        </Card>

                            
                        </div>                         
                    })}
                </Slider> 

                {/* </Card> */}
                
            </div>
        )
    }
}

export default Priest
