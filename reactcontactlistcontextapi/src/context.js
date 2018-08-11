import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: " 555-555-5555"
      },
      {
        id: 2,
        name: "Sally Smith",
        email: "ssmith@gmail.com",
        phone: " 555-555-6667"
      },
      {
        id: 3,
        name: "Jack Tripper",
        email: "jtrip@gmail.com",
        phone: " 555-555-6678"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
