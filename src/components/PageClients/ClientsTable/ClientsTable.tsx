import React from 'react'
import { Client } from '../../../types/database.type'
import ClientTableHeader from './ClientTableHeader/CleintTableHeader'

type ClientsTableProps = {
  clients: Client[]
}

const ClientsTable: React.FC<ClientsTableProps> = (props) => {
  return (
    <table>
      <ClientTableHeader />
      <tbody>

      </tbody>
    </table>
  )
}

export default ClientsTable