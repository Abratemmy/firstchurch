import image1 from '../src/images/image1.png';
import image2 from '../src/images/image2.png';
import image3 from '../src/images/image3.png';
import image4 from '../src/images/image4.png';
import image5 from '../src/images/image5.png';
import image6 from '../src/images/image6.png';
import React from 'react';
const items= [
    {
        id: 1,
        name: 'all',
        url: image1,
        featured: false
    },

    {
        id: 2,
        name: 'all',
        url:image2,
        featured: false
    },

    {
        id: 3,
        name: 'all',
        url:image3,
        featured: false
    },

    {
        id: 4,
        name: 'pastor',
        url:image4,
        featured: true
    },

    {
        id: 5,
        name: 'all',
        url:image5,
        featured: false
    },

    {
        id: 6,
        name: 'pastor',
        url:image6,
        featured: true
    }


];
export function Pastorall(){
        let images = items.map(item=>item.url)
        // let featured = items.filter(images => images.name === true)
        // return featured ;
        return images
        
  
   
}