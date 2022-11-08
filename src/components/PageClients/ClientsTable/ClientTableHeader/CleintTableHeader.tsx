import React from 'react'

export type ClientTableHeaderProps = {}

const ClientTableHeader: React.FC<ClientTableHeaderProps> = (_props) => {

  return (
    <thead>
      <tr>
        <th className="td__left">Full Name</th>
        <th>Gender</th>
        <th>Email</th>
        <th>Country</th>
        <th>FlightsQnty</th>
      </tr>
    </thead>
  )
}

export default ClientTableHeader