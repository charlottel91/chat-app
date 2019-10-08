import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className = "Contact">
            <img src = {props.avatar} alt = '{props.name}'/>
            <div>
            <h4>Name: {props.name}</h4>
            <p>{props.online ? 'Online' : 'Offline'}</p>
            </div>
        </div>
    )
}

// const name = "Charlotte";
// const avatar = 'https://avatars2.githubusercontent.com/u/53869538?s=400&u=4a97861fce7ea75e170ef6594b6a7c81d48efebc&v=4'; 
// const online = true;

ReactDOM.render(element, document.getElementById('root'));