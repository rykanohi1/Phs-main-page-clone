import React from "react"
import actionBadge from "../action-badge/action-badge.jsx"

function menuSlots (props) {
    const listOfSlots = props.listOfSlots;
    return(   
        <div>
            {listOfSlots.map((item, index) => {
                        <div>
                            <actionBadge 
                                key={index} 
                                imgSrc={item.imgSrc} 
                                title={item.title} 
                                description={item.description}/>
                        </div>
                    }
                )}
        </div>
    )
}

export default menuSlots;