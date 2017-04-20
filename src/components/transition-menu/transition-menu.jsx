import React from "react";
import ActionBadge from "../action-badge/action-badge.jsx";
import "./transition-menu.css";

function menuSlots (props) {
    const listOfSlots = props.listOfSlots;
    return(   
        <div className="transition-menu">
            {listOfSlots.map((item, index) => {
                return(
                        <div key={index}>
                            <ActionBadge 
                                imgSrc={item.imgSrc} 
                                heading={item.heading} 
                                description={item.description}
                                badgeType={item.badgeType}/>
                        </div>
                        )
                    }
              )}
        </div>
    )
}

export default menuSlots;