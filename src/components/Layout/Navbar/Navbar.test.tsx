import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import userEvent from '@testing-library/user-event'


describe('Navbar', () => {

    const getBurgerButton = () => screen.getByRole('button', { name: /открыть меню/i })
    const getNavbarTitle = () => screen.getByRole('heading', { name: 'Petr Tcoi', level: 1 })
    const getReactLogo = () => screen.getByRole('link', { name: /логотип react/i })



    test('Выводится ссылка на главную странциу', () => {
        render(<Navbar />)
        expect(getReactLogo()).toBeVisible()
        expect(getReactLogo()).toHaveAttribute('href', '/')
    })

    test('Выводится Заголовок в шапке', () => {
        render(<Navbar />)
        expect(getNavbarTitle()).toBeVisible()
    })

    test('Есть бургер, кнопка для открытия меню', () => {
        render(<Navbar />)
        expect(getNavbarTitle()).toBeInTheDocument()
    })

    test('Бургер в меню имеет атрибут data-should-hide = false', () => {
        render(<Navbar />)
        expect(getBurgerButton()).toHaveAttribute('data-should-hide', 'false')
    })
    test('Бургер в меню имеет атрибут data-should-hide = true после клика', () => {
        render(<Navbar />)
        userEvent.click(getBurgerButton())
        expect(getBurgerButton()).toHaveAttribute('data-should-hide', 'false')
    })

})