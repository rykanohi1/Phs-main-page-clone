import React from "react"
import ActionBadge from "../action-badge/action-badge.jsx"

function menuSlots (props) {
    const listOfSlots = props.listOfSlots;
    return(   
        <div>
            {listOfSlots.map((item, index) => {
                return(
                        <div key={index}>
                            <ActionBadge 
                            imgSrc={item.imgSrc} 
                            title={item.title} 
                            description={item.description}
                            />
                        </div>)
                    }
              )}
        </div>
    )
}

export default menuSlots;