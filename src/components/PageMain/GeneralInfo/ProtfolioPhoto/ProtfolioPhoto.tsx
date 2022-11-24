import React from 'react'
import Image from 'next/image'

import styles from './portfoliophoto.module.css'

type PortfolioPhotoProps = {}

const PortfolioPhoto: React.FC<PortfolioPhotoProps> = (_props) => {
  return (
    <div className={ styles.photo }>
      <Image
        priority={ true }
        fill
        src={ "/images/portfolio-image.jpg" }
        sizes={ "300px" }
        alt={ "Фотография Petr Tcoi для портфолио" }
        title={ "Моя фотография. Я люблю React" }
        style={ { borderRadius: "50%" } }
      />
    </div>
  )
}

export default PortfolioPhoto