import React from "react";
import ActionBadge from "../action-badge/action-badge";

export default function schoolActions(props) {
    return (
        <div style={{ backgroundColor: "rgb(163, 197, 134)", borderTop: "8px solid #fc3" }}>
            <div className="container">
                <div className="row">
                    <ActionBadge
                        badgeType="basic-action"
                        imgSrc="/images/register-for-school-icon.svg"
                        heading="register for school"
                        description="Register your kindergartner or new student here to begin their learning odyssey."
                        link="#" />

                    <ActionBadge
                        badgeType="basic-action"
                        imgSrc="/images/calendar-icon.svg"
                        heading="view school calendar"
                        description="Find out what events are happening in your school."
                        link="#" />

                    <ActionBadge
                        badgeType="basic-action"
                        imgSrc="/images/lunch-menu-icon.svg"
                        heading="view lunch menu"
                        description="Find out what's for lunch, nutritious food prepared by our professionally trained chefs."
                        link="#" />
                </div>
            </div>
        </div>
    )
}