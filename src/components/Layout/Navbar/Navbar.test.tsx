import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'


describe('Navbar', () => {

    test('Выводится логотип React', () => {
        render(<Navbar />)
        expect(screen.getByTestId('react-logo')).toBeVisible()
    })

    test('Выводится Заголовок в шапке', () => {
        render(<Navbar />)
        expect(screen.getByTestId('header-title')).toBeVisible()
    })

    test('Есть бургер, кнопка для открытия меню', () => {
        render(<Navbar />)
        expect(screen.getByTestId('popupmenu-burger-button')).toBeVisible()
    })

})