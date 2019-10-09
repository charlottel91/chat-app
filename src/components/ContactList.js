import React from "react";
import Contact from './Contact';

// An array of objects
const contacts = [
  {
    name: "MexicainLego",
    online: true,
    avatar: 'https://randomuser.me/api/portraits/lego/6.jpg'
  },
  {
    name: "CuisinierLego",
    online: false,
    avatar: 'https://randomuser.me/api/portraits/lego/8.jpg'
  },
  {
    name: "DriverLego",
    online: true,
    avatar: 'https://randomuser.me/api/portraits/lego/0.jpg'
  }
];

const ContactList = () => (
  <div>
    {contacts.map(item => <Contact name={item.name} online={item.online} avatar={item.avatar} />)}
  </div>
);

export default ContactList;