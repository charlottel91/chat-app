import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className = "Contact">
            <img className = 'avatar' src = {props.avatar} alt = '{props.name}'/>
            <div className = 'status'>
            <h4 className = 'name' >{props.name}</h4>
            <div className = 'second-status'>
                <div className = {props.online ? 'status-online': 'status-offline'}>
                <p>
                {props.online ?  'Online': 'Offline' }
                </p>
                </div>
            </div>
            </div>
        </div>
    )
}




export default Contact;