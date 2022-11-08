import React from 'react'
import { Theme } from '../../../../theme/theme.enum'

export type ClientTableHeaderProps =  {}

const ClientTableHeader: React.FC<ClientTableHeaderProps> = (_props) => {

  return (
    <thead data-testid="table-clients__header">
      <tr>
        <th className="td__left">Full Name</th>
        <th>Gender</th>
        <th className="hide-on-small">Email</th>
        <th>Country</th>
        <th>FlightsQnty</th>
      </tr>
    </thead>
  )
}

export default ClientTableHeader