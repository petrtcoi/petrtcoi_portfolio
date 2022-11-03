import React from 'react'
import Image from 'next/image'

type PortfolioImageProps = {}

const PortfolioImage: React.FC<PortfolioImageProps> = (_props) => {

    return (
        <Image
            src={ "/images/portfolio-image.jpg" }
            priority

            width={200}
            height={200}
            sizes="300px"

            alt={ "Фотография Petr Tcoi для портфолио" }
            title={"Моя фотография. Я люблю React"}
            style={ { borderRadius: "50%", border: "1px solid" } }
        />
    )
}

export default PortfolioImage