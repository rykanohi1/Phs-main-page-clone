import React from 'react';
import './action-badge.css';

export default function (props) {
    return (
        <div className={props.badgeType}>
            <div>
                <img alt="icon" src={props.imgSrc}/>
            </div>
            <div>
                    <a href={props.link}>{props.heading}</a>
            </div>
            <div>{props.description}</div>
        </div>
    )
    // My action badge should have a display or picture of some kind, 
    // similar to the action taking place

    // My action badge needs a linked title

    // my action badge needs descriptive text for the action taking place

    // I should be able to adapt the styling of my badge to different areas


    /*              <actionBadge 
                    badgeType="action-badge"
                    imgSrc="https://api.grumpycats.com/images/57258a762c68d71cefbf043c22a9f87d9fd5bf72/aHR0cCUzQSUyRiUyRmJldGFsbGljLmNvbSUyRnRodW1icyUyRjYwMHg2MDAlMkZwYWdlaW1hZ2VzJTJGRVZfMjAxNiUyRjM1MjYwX0dydW1weVBhcnR5RmFjZS5lcHM%3D"
                    imgClass="img-circle action-badge-icon" 
                    link="https://upload.wikimedia.org/wikipedia/commons/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg" 
                    title="Click on this cat" 
                    linkType="action-badge-link"
                    description="Click on this cat for something awesome!" 
                    textStyle="action-badge-text"/>

                    // .not-active {
                        pointer-events: none;
                        cursor: default;
                    } 
                    disables link in linked text
    */
}