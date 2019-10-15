import React from 'react';
import './Contact.css';

// const Contact = (props) => {
//     return (
//         <div className = "Contact">
//             <img className = 'avatar' src = {props.avatar} alt = '{props.name}'/>
//             <div className = 'status'>
//                 <div className = 'name' >{props.name}</div>
//                 <div className = 'status'>
//                     <div class ='block'>
//                         <div className = {props.online ? 'status-online': 'status-offline'}>
//                         </div>
//                         <p>{props.online ?  'Online': 'Offline' }</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: props.online
        }
    }
    render() {
        return (
            <div className="Contact"
            onClick={event => {
                this.setState({ online: !this.state.online })
            }}
            >
                <img className='avatar' src={this.props.avatar} alt='{this.props.name}' />
                <div className='status'>
                    <div className='name' >{this.props.name}</div>
                    <div className='status'>
                        <div class='block'>
                            <div className={this.state.online ? 'status-online' : 'status-offline'}>
                            </div>
                            <p>{this.state.online ? 'Online' : 'Offline'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Contact;