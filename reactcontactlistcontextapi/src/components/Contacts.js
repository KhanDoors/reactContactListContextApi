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
    };

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id);

        this.setState({
            contacts: newContacts
        });
    };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
        <Contact 
        key={contact.id}
        contact={contact}
        deleteClickHandler={this.deleteContact.bind(this, contact.id) } 
        />
        ))}
      </React.Fragment>
    )
  }
}


export default Contacts;
