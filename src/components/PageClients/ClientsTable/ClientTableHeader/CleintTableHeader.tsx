import React from 'react'

export type ClientTableHeaderProps =  {}

const ClientTableHeader: React.FC<ClientTableHeaderProps> = (_props) => {

  return (
    <thead data-testid="table-clients__header">
      <tr>
        <th style={{textAlign: "left"}}>Full Name</th>
        <th>Gender</th>
        <th data-state-hide-on-small="true">Email</th>
        <th>Country</th>
        <th>FlightsQnty</th>
      </tr>
    </thead>
  )
}

export default ClientTableHeader