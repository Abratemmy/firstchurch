import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import about from '../images/about.png';
import Footer from '../components/footer';
 
export class About2 extends Component {
    render() {
        return (
            <div>
                <div className="" >
                <img src={about} alt="not found" width="100%" height="500" className="aboutpageimg"/>
                   <p style={{top:'-270px', textAlign:'center',height:'0vh', color:'white', fontSize:'60px', position:'relative',marginBottom:'0%'}}>What We Believe</p> 
                </div>
               <div className="whoweare">
                   <Grid>
                       <Cell col={4}>
                           <p style={{fontSize:'20px'}}>About</p>
                           <div className="aboutdrop" style={{display:'block'}}>
                                <Link to='/about' className="aboutdropdown">Who are we</Link>
                                <Link to='/about2' className="aboutdropdown" style={{color:'rgb(236, 59, 168)'}}>What We Believe</Link>
                                <Link to='' className="aboutdropdown">Meeting times</Link>
                            </div>
                       </Cell>
                       <Cell col={8}>
                            <div>God and the Bible</div>
                            <p>We believe in the inspiration of the Old and New Testament Scriptures that we find in the Bible 
                            There is nothing that anyone can know about God's nature unless He reveals it to humankind. Without divine revelation humanity will be in darkness. Fortunately, the Bible has told us about God's nature. 
                            From the Scripture we can discover four basic description of God's character. 
                            </p>
                            <hr/>

                            <div>Why I need a Saviour</div>
                            <p>
                            Sin. Our sin, which is inevitably born through our thoughts and intentions (James 1:14–15), 
                            comes so naturally due to the sinful nature (Romans 7:14–25) we inherited from our father Adam who disobeyed God and ate the forbidden fruit (Genesis 3). Sin, which has brought separation from God—both physical and spiritual (Genesis 2:17)—to all. Sin, which is deserving of death before a holy and righteous God. Sin,
                             worthy of wrath and punishment, which we cannot overcome on our own no matter how desperately we try.
                            </p>
                            <hr />

                            <div>How do I become a christian</div>
                            <h6> Believe</h6>   
                            <p>   We must believe God exists and that He rewards those who seek Him. That’s the first step. But you say: 
                                “I don’t have faith. How can I get this faith in God?” Well, here’s the way as described by the apostle Paul in Romans 10:17:
                                “Faith comes from hearing the message, and the message is heard through the word of Christ.”
                            </p>
                            
                            <h6>Repent</h6>
                            <p>
                                Now we come to the second step, which leads us to a change of life. It is here in Romans 2:4: 
                                “Do you show contempt for the riches of His kindness, tolerance and patience, not realizing that God’s kindness leads you towards repentance?”
                            </p>

                            <h6>Confess</h6>
                            <p>
                                The next step in becoming a Christian is confession. “Confess your sins to each other and 
                                 for each other so that you may be healed.” (James 5:16) “He that conceals his sins does not 
                                 prosper, but whoever confesses and renounces them finds mercy.” (Proverbs 28:13) 
                            </p>

                            <h6>Baptism</h6>
                            <p>
                                Now the next step is baptism, and the proof for this found in Acts 2:38, 39:
                                 “Repent, and be baptized, every one of you, in the name of Jesus Christ so that your sins 
                                 may be forgiven. And you will receive the gift of the Holy Spirit.
                            </p>
                       </Cell>
                    </Grid>
                </div>

                <Footer />

            </div>
        )
    }
}

export default About2
