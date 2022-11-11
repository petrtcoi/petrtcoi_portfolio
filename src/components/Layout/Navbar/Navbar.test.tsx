import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Navbar from './Navbar'


describe('Navbar', () => {

    const getLinkToMainPage = () => screen.getByRole('link', {name: /react logo/i })
    const getNavbarTitle = () => screen.getByRole('heading', { name: 'Petr Tcoi', level: 1 })
    const getBurgerButton = () => screen.getByRole('button', { name: /открыть меню/i })
    

    beforeEach(() => { render(<Navbar />) })

    test('Выводится ссылка на главную страницу на странице', () => {
        expect(getLinkToMainPage()).toBeVisible()
        expect(getLinkToMainPage()).toHaveAttribute('href', '/')
    })
    test('эта страница вклчюает в себя логотип React', () => {
        const reactLogo = within((getLinkToMainPage())).getByTestId(/react logo/i )
        expect(reactLogo).toBeVisible()
    })

    test('Выводится Заголовок в шапке', () => {
        expect(getNavbarTitle()).toBeVisible()
    })

    test('Есть бургер, кнопка для открытия меню', () => {
        expect(getNavbarTitle()).toBeInTheDocument()
    })
    test('Бургер в меню имеет атрибут data-state-should-hide = false', () => {
        expect(getBurgerButton()).toHaveAttribute('data-state-should-hide', 'false')
    })
    test('Бургер в меню имеет атрибут data-state-should-hide = true после клика', async () => {
        await userEvent.click(getBurgerButton())
        expect(getBurgerButton()).toHaveAttribute('data-state-should-hide', 'true')
    })

})