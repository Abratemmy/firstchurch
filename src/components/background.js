import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../components/banner';


const photos=[
    {
        id: 1,
        name: 'photo 1',
        url: "http://html.themedemo.co/rome/img/slide-1.jpg",
    },
    {
        id: 2,
        name: 'photo 2',
        url: "https://cdn.pixabay.com/photo/2020/03/30/17/15/funes-4984899__340.jpg",
    },
    {
        id: 3,
        name: 'photo 3',
        url: "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439__340.jpg",
    }
]

class Background extends Component {
    render() {
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            className: "slides"
        }
        return (
            <div className="image-slider">
                <Slider {...settings} className="image-slider">
                   {photos.map(photos=>{
                        return<div className="sliding-image " key={photos.id}> 
                            <img src={photos.url} width="100%" height="830" alt="error" className="bgimage"/>
                        </div>                         
                    })}
                </Slider> 
                <Banner text="you are welcome to" title="king" titleend="rch" className="background-banner">
                    <h6 style={{fontStyle:'italic', fontWeight:'bold'}}>Choose the right way with God</h6>

                </Banner>
            </div>
        )
    }
}

export default Background


