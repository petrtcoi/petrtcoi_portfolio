import React from "react"


type FooterProps = {}

const Footer: React.FC<FooterProps> = (_props) => {

    return (
        <footer data-testid={ "layout-footer" }>
            <div className="text--small" style={{textAlign: "center"}}>
                <div>Открыт для любых предложений</div>
                <div>Публицация на dev.to и vc.ru</div>

            </div>
            <div className="text--small"></div>
        </footer>
    )
}

export default Footer