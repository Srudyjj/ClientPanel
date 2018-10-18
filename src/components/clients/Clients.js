import React, { Component } from 'react'
import DashBoard from '../layout/DashBoard';
import { Link } from 'react-router-dom';

export default class Clients extends Component {

  render() {
    const clients = [
      {
        id: "zasdasdasd",
        firstName: "sdafsadf",
        lastName: "asdfasdfd",
        email: "sdasda@ff.com",
        phone: "3232-323-3223",
        balance: "30"
      }
    ]

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {''}
                <i className="fas fa-users" /> Clients{' '}
              </h2>
            </div>
            <div className="col-md-6"></div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => {
                return (
                  <tr key={client.id}>
                    <td>{client.firstName} {client.lastName} </td>
                    <td>{client.email}</td>
                    <td>{client.balance}</td>
                    <td>
                      <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                        <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Clients</h1>
        </div>
      )
    }

  }
}
