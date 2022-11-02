import { FC } from "react"
import Image from "next/image"

type ReactLogoProps = {
    size: number
    alt?: string
}

const ReactLogo: FC<ReactLogoProps> = (props) => {
    return (

        <Image
            src={ "/images/icons/logo-react.svg" }
            width={ props.size  }
            height={ props.size }
            alt={props.alt ? props.alt : "Логотип React. На котором пишет Petr Tcoi"}
            title={props.alt ? props.alt : "Логотип React. На котором хорошо пишет Petr Tcoi"}
            style={ {
                filter: "invert(51%) sepia(85%) saturate(2665%) hue-rotate(322deg) brightness(111%) contrast(99%)"
            } }
        />

    )
}

export default ReactLogo