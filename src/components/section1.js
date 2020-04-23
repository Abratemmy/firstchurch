import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/header';

const words=[
    {
        id: 1,
        word: "Jesus said I am the way, the truth and the life",
        bible: "Matt"
    },
    {
        id: 2,
        word:"Jesus is the bread of life",
        bible:" John"
    },
    {
        id: 3,
        word: "Jesus the same yesterday, today and forever",
        bible: "II Cor"
    },
    {
        id: 4,
        word: "Jesus is the rock of ages",
        bible: "Matt"
    },{
        id: 5,
        word: "Jesus the i am that i am, the way maker, Miracle worker, Ocean divider, mountain melter",
        bible:"Matt"
    }
]
class Section1 extends Component {
    render() {
        const jesuswords = {
            dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
            className: "slides"
        }
        return (
            <div className="sectionone">
                <div className="sectionone1">
                    <Header title="Jesus words to you" text="What does the bible says?"></Header>
                    <Slider {...jesuswords} className="sectionone-slider">
                        {words.map(words=>{
                            return<div  key={words.id}> 
                                <div className="secttionone-slide">
                                    <p>{words.bible}  </p>
                                    <h4>{words.word}</h4>
                                </div>
                            </div>
                            
                        })}

                    
                    </Slider> 
                </div>
            </div>
        )
    }
}

export default Section1
