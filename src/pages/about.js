import React, { Component } from 'react';
import about from '../images/about.png';
import {Link}  from 'react-router-dom';
import { Grid , Cell} from 'react-mdl';
import about1 from '../images/about1.png';
import Footer from '../components/footer';

 class About extends Component {
    render() {
        return (
            <div className="aboutPage">
               
                <div className="" >
                <img src={about} alt="not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>Who Are We</p> 
                </div>
               <div className="whoweare">
                   <Grid>
                       <Cell col={4}>
                           <p style={{fontSize:'20px'}}>About</p>
                           <div className="aboutdrop" style={{display:'block'}}>
                                <Link to='/about' className="aboutdropdown" style={{color:'rgb(236, 59, 168)'}}>Who are we</Link>
                                <Link to='/about2' className="aboutdropdown">What We Believe</Link>
                                <Link to='' className="aboutdropdown">Meeting times</Link>
                            </div>
                       </Cell>

                       <Cell col={8}>
                           <div className="whowearetext">
                               <p> Have you seen the brokenness in the world around us? You don't have to look very hard to see 
                                the shattered relationships in our communities. It's a story told repeatedly through Hatred, Greed, and Violence. 
                                And we feel the brokenness in ourselves through our worries, our pain, the trouble in our personal relationships,
                                and even the knowledge of our own failures. We long for healing, knowing that there should be something or someone to right the wrongs, to restore peace and joy, and to show us a better way to live.
                                What we ultimately seek is Love. It is Belonging. It is Identity. It is Justice. It is Truth.
                                </p>
                            </div>

                            <img src={about1} alt="not found" />

                            <div className="whowearetext" style={{paddingTop:'20px'}}>
                                <p>At the Kingdom of Chtist church, we do not claim to have all the answers or be able to provide everything your soul is longing for. But we are followers of the One who does claim to be "The Way, the Truth, and the Life" (John 14:6)... the One whom the Bible claims "holds all things together" (Colossians 1:17)... 
                                the One who said that His mission was to "seek and to save the lost" (Luke 19:10)... the One who told us that He is "making all things new" (Revelation 21:5). Jesus does not claim to offer you an easy life. But He does say that when your life is lived in Him and through Him that it will be the most fulfilling life possible. You will find a Savior. And in that Savior, you will find Love. Belonging. Identity. Justice. Truth.
                                </p>
                                <p>What is our mission at the Kingdom of christ church? It is simply to be the community of people whose life, teaching, worship, service, and mission are lived out in imitation of Jesus Christ and His earliest community of followers - the church of the New Testament. In our teaching and preaching from the Bible, you will see the relevance of Jesus Christ to all of life's races, nationalities, ages, languages, and socio-economic backgrounds - all seeing what they have in common:
                                     broken people in need of a Savior. And in Christ, they find the loving community they have been longing for.</p>
                                <p>If you are ready to see an authentic, Bible-based, Christ-centered approach to living out the Christian faith, please consider contacting us or visiting our worship gatherings.
                                </p>
                            </div>
                            <div>
                                <p>To His Glory</p>
                                <p>Prophet Immanuel Godfrey <br />
                                    Minister of the Gospel <br />
                                    Kingdom of Christ Church</p>
                            </div>
                        </Cell>
                   </Grid>
               </div>
               <Footer />  
            </div>
            
        )
    }
}

export default About
