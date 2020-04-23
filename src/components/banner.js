import React from 'react';

export default function Banner({children, title, text, titleend}) {
    return (
        <div className="banner">
            <p>{text}</p>
            <h1>{title}<span className="banner-overlay">dom of christ chu</span>{titleend} </h1>
            {children}
        </div>
    ) 
}
