import type { NextPage } from 'next'
import React from 'react'

import ClientsTable from '../src/components/PageClients/ClientsTable/ClientsTable'
import { useAppDispatch } from '../src/redux/hooks'
import { fetchInitialData } from '../src/redux/slices/aircompany/aircompanySlice'
import { fetchEntity } from '../src/server/api'


type ClientsPageProps = {}

const ClientsPage: NextPage<ClientsPageProps> = (_props) => {

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        
        (async () => {
            dispatch(fetchInitialData())
        })()
        
    }, [])



    return (
        <div data-testid="page-clients">
            <h1>Таблица с клиентами</h1>
            <ClientsTable clients={ [] } />
        </div>
    )
}

export default ClientsPage