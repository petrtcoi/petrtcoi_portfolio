import { FC } from "react"

type FooterProps = {}

const Footer: FC<FooterProps> = (_props) => {

    return (
        <footer
            data-testid={"footer"}
            style={ { backgroundColor: "#eeeeee" } }>
            Footer
        </footer>
    )
}

export default Footer