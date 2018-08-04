import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: ' 555-555-5555'
            },
            {
                id: 2,
                name: 'Sally Smith',
                email: 'ssmith@gmail.com',
                phone: ' 555-555-6667'
            },
            {
                id: 3,
                name: 'Jack Tripper',
                email: 'jtrip@gmail.com',
                phone: ' 555-555-6678'
            }
        ]
    }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
        <Contact 
        key={contact.id}
        contact={contact} 
        />
        ))}
      </div>
    )
  }
}


export default Contacts;
