import type { NextPage } from 'next'
import GeneralInfo from '../src/components/PageMain/GeneralInfo/GeneralInfo'
import WorkList from '../src/components/PageMain/WorkList/WorkList'
import { works } from '../src/server/dataset/works'



type PageMainProps = {}

const PageMain: NextPage<PageMainProps> = (_props) => {


    return (
        <div data-testid="page-home" >
            <GeneralInfo />
            <WorkList works={ works } />
        </div>
    )
}

export default PageMain
