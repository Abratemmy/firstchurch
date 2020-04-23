import React from 'react';

export default function Header({children, title,title1, text, subtitle, overlay}) {
    return (
        <div className="header">
            <h6>{text}</h6>
            <div>
                <span className="">{title}</span><span className="header-overlay">{overlay}</span><span className="">
                {title1}</span></div>
            <p>{subtitle}</p>
            {children}
        </div>
    ) 
}
