import React from 'react'

type BurgerMenuIconProps = {
    size: number
    className: string
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = (props) => {
    return (
        <div className={ props.className } aria-label={"Кнопка открыть меню"}>
            <svg viewBox="0 0 100 75" width={ props.size } height={ props.size } >
                <rect width="100" height="15" />
                <rect y="30" width="100" height="15" />
                <rect y="60" width="100" height="15" />
            </svg>
        </div>

    )
}
export default React.memo(BurgerMenuIcon)