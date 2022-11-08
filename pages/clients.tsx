import type { NextPage } from 'next'
import React from 'react'

import dbData from '../src/backend/dbData'
import ClientsTable from '../src/components/PageClients/ClientsTable/ClientsTable'


type ClientsPageProps = {}

const ClientsPage: NextPage<ClientsPageProps> = (_props) => {

    React.useEffect(() => console.log(dbData), [])

    return (
        <div data-testid="page-clients">
            <h1>Таблица с клиентами</h1>
            <ClientsTable clients={ [] } />
        </div>
    )
}

export default ClientsPage