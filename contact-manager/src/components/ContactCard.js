import React from "react";
import user from "/home/nirbhay/Desktop/coding/projects/contact-manager/src/images/user.jpg";

const ContactCard = (props) => {
    const{id,name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui avatar image src" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"8px" } }></i>
            </div>
    );
}
export default ContactCard;