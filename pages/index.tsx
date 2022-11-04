import type { NextPage } from 'next'
import ContactInfo from '../components/PageMain/ContactInfo'
import GeneralInfo from '../components/PageMain/GeneralInfo'

import PortfolioImage from '../components/PageMain/PortfoliImage'
import WorkList from './../components/PageMain/WorkList'

import styles from './../components/PageMain/css/styles.module.css'

type PageMainProps = {}

const PageMain: NextPage<PageMainProps> = (_props) => {


    return (
        <div data-testid="page-home" >
            <div style={ { display: "flex", flexWrap: "wrap" } }>
                <div className={ styles["image-contacts-block"] }>
                    <PortfolioImage />
                    <ContactInfo />
                </div>
                <GeneralInfo />
            </div>
            <WorkList />
        </div>
    )
}

export default PageMain
