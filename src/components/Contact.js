import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className = "Contact">
            <img className = 'avatar' src = {props.avatar} alt = '{props.name}'/>
            <div className = 'status'>
                <div className = 'name' >{props.name}</div>
                <div className = 'status'>
                    <div class ='block'>
                        <div className = {props.online ? 'status-online': 'status-offline'}>
                        </div>
                        <p>{props.online ?  'Online': 'Offline' }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Contact;