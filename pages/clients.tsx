import type { NextPage } from 'next'
import React from 'react'

import dbData from '../src/backend/dbData'


type ClientsPageProps = {}

const ClientsPage: NextPage<ClientsPageProps> = (_props) => {

    React.useEffect(() => console.log(dbData), [])

    return (
        <div data-testid="page-clients">
            { dbData.clients.length }
        </div>
    )
}

export default ClientsPage