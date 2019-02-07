import React, { Component } from 'react';
import axios from 'axios'

import TicketTable from './TicketTable'
import TicketForm from './TicketForm'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      tickets: []
    }
  }

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=10b27c45195a4294')
      .then((response) => {
        const tickets = response.data
        this.setState(() => ({
          tickets
        }))
      })
  }

  handleSubmit = (ticket) => {
    this.setState((prevState) => ({
      tickets: prevState.tickets.concat(ticket)
    }))
  }

  render() {
    console.log(this.state.tickets)
    return (
      <div>
        <h2>Ticket Master</h2>
        <h3>Listing Tickets - {this.state.tickets.length} </h3>
        <TicketTable tickets={this.state.tickets} />

        <TicketForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;