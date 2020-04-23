import React, { Component } from 'react';
import Header from './header';
import{ Grid,  Cell , Card, CardActions, Button,CardMenu,IconButton,CardText,CardTitle} from 'react-mdl';
import church4 from '../images/church4.png';


class Blog extends Component {
    render() {
        return (
            <div>
                <Header text="our post" title="latest from our blog" subtitle="Maecenas auctor magna massa, a congue dui lacinia ut"/>
                
                <div className="blogs-section">
                    <div className="">
                        <img src={church4} alt="church 4" width="100%" height="300" className="image-blog" />
                        <p style={{paddingTop:'10px'}}><em>Jan 1, 2020</em></p>
                        <h6 style={{fontWeight:'bold'}}>First powerful service in the year</h6>
                        <div style={{lineHeight:'25px'}}>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst</div>
                    </div>
                    <div className="">
                        <img src={church4} alt="church 4" width="100%" height="300"className="image-blog"  />
                        <p style={{paddingTop:'10px'}}><em>Jan 1, 2020</em></p>
                        <h6 style={{fontWeight:'bold'}}>First powerful service in the year</h6>
                        <div style={{lineHeight:'25px'}}>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst</div>
                    </div>

                    <div className="">
                        <img src={church4} alt="church 4" width="100%" height="300" className="image-blog" />
                        <p style={{paddingTop:'10px'}}><em>Jan 1, 2020</em></p>
                        <h6 style={{fontWeight:'bold'}}>First powerful service in the year</h6>
                        <div style={{lineHeight:'25px'}}>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst</div>
                    </div>

                    <div className="">
                        <img src={church4} alt="church 4" width="100%" height="300" className="image-blog" />
                        <p style={{paddingTop:'10px'}}><em>Jan 1, 2020</em></p>
                        <h6 style={{fontWeight:'bold'}}>First powerful service in the year</h6>
                        <div style={{lineHeight:'25px'}}>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst</div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Blog
