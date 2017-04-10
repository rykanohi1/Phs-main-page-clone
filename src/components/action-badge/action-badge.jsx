import React from 'react';

export default function(props) {
    return (
        <div style={props.containerStyle}>
            <div>
                <a href="*"><img alt={props.altTag} className={props.imgClass} src={props.imgSrc} style={props.imgStyle}/></a>
            </div>
            <div>
                <h3>
                <a style={props.titleStyle} href={props.link}>{props.linkedTitle}</a>
                </h3>
            </div>
            <div>
                <h6>
                    <small style={props.textStyle}>
                        {props.text}
                    </small>
                </h6>
            </div>
        </div>
    )
// My action badge should have a display or picture of some kind, 
// similar to the action taking place

// My action badge needs a linked title

// my action badge needs descriptive text for the action taking place

// I should be able to adapt the styling of my badge to different areas
}