import React from 'react';
import './action-badge.css';

export default function (props) {
    return (
        <div className={`action-badge ${props.badgeType}`}>
            <div>
                <img alt="icon" src={props.imgSrc}/>
            </div>
            <div>
                    <a href={props.link}>{props.heading}</a>
            </div>
            <div>{props.description}</div>
        </div>
    )

    /*              
                    // .not-active {
                        pointer-events: none;
                        cursor: default;
                    } 
                    disables link in linked text
    */
}