import React, { Component } from 'react';
import about from '../images/about.png';
import audio from '../audio/audio.mp3.mp3';
import audio1 from '../audio/audio.mp3';
import Footer from '../components/footer';
import { Grid,Cell } from 'react-mdl';

const displayaudio=[
    {   
        id: 1,
        topic:'Jesus shepherd',
        pastor:'Prophet Godfrey',
        img:"https://cdn.pixabay.com/photo/2020/01/12/18/15/nativity-scene-4760695__340.jpg",
        audiocd: audio,
        message:'Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium. ',
    },
    {   
        id: 2,
        topic:'Be still',
        pastor:'Prophet Godfrey',
        img:"https://images.squarespace-cdn.com/content/5664f33ae4b0665ae8f88fa1/1584457386376-H2R7I9B5W2ZM8BTOZC5A/Be+Still%2C+My+Soul.jpg?format=750w&content-type=image%2Fjpeg",
        audiocd: audio1,
        message:'Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium. '
    },
    {   
        id: 1,
        topic:'Jesus shepherd',
        pastor:'Prophet Godfrey',
        img:"https://cdn.pixabay.com/photo/2020/01/12/18/15/nativity-scene-4760695__340.jpg",
        audiocd: audio,
        message:'Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium. ',
    },
    {   
        id: 2,
        topic:'Be still',
        pastor:'Prophet Godfrey',
        img:"https://images.squarespace-cdn.com/content/5664f33ae4b0665ae8f88fa1/1584457386376-H2R7I9B5W2ZM8BTOZC5A/Be+Still%2C+My+Soul.jpg?format=750w&content-type=image%2Fjpeg",
        audiocd: audio1,
        message:'Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium. '
    }
]

class Audios extends Component {
    constructor(){
        super();
        this.state = {
            search:''
        };
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0, 20)})
    }
    render() {
        return (
            <div>
                <div className="" >
                    <img src={about} alt="not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Our Sermon</p> 
                </div>

                <div className="" style={{padding:'0px 10% 0px 13%',top:'-100px', position: 'relative'}}>
                    <Grid >
                        <Cell col={8}>
                            <div>
                                {displayaudio.map(audio=>{
                        return <div className="" key={audio.id}> 

                                <div className="audiotopic">{audio.topic} </div>

                                <div style={{fontFamily:'Anton',textTransform:'capitalize',paddingBottom:'15px', color:'rgb(110, 107, 107)'}}>{audio.pastor} </div>
                                <div><img src= {audio.img}alt="network error, ckeck you connection" 
                                width="100%" height="150" style={{color:'red', fontStyle:'italic'}}/>
                                </div>
                                <div className="audiotext">{audio.message} </div>
                                <div style={{paddingBottom:'30px'}}><audio controls  >
                                        <source src ={audio.audiocd} type="audio/mpeg"/>
                                    </audio>
                                </div>
                                
                        </div>                         
                    })}
                        </div>

                        </Cell>
                        <Cell col={4}>
                            {/* <ul>{this.props.displayaudio.map((contact)=>{
                                return
                            })} </ul> */}
                            {/* <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} /> */}
                        </Cell>
                    </Grid>
                    

                    <div >
                        
                        
                        
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Audios
