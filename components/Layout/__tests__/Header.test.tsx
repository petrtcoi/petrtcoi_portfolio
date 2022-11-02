import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import Header from '../Header'
import { MenuStatus } from '../../../typings/ui'





describe('Header', () => {


    describe('Popup Menu', () => {


        test('Выводится логотип React', () => {
            render(<Header />)
            expect(screen.getByTestId('react-logo')).toBeVisible()
        })

        test('Выводится Заголовок в шапке', () => {
            render(<Header />)
            expect(screen.getByTestId('header-title')).toBeVisible()
        })


        test('Скриншот тест для верстки', () => {
            const container = render(<Header />)
            expect(container).toMatchSnapshot()
        })


        test('Есть бургер, кнопка для открытия меню', () => {
            render(<Header />)
            expect(screen.getByTestId('popupmenu-burger-button')).toBeVisible()
        })

        test('Popup меню скрыто и имеет статус закрыто', () => {
            render(<Header />)
            const popupMenu = screen.getByTestId('popup-menu')
            expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.closed)
            expect(popupMenu).not.toBeVisible()
        })

        test('Клик по бургеру меняет статус меню на открыто и видно', async () => {
            render(<Header />)
            const popupMenu = screen.getByTestId('popup-menu')
            await userEvent.click(screen.getByTestId('popupmenu-burger-button'))
            expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.open)
            expect(popupMenu).toBeVisible()
        })

        test('Клик по бургеру делает ставит на него свойстро "скрыть"', async () => {
            render(<Header />)
            const burgerButton = screen.getByTestId('popupmenu-burger-button')
            await userEvent.click(burgerButton)
            expect(burgerButton.dataset.shouldHide).toBe("true")
        })


        test('Клик по крестику меняет статус на закрыто и не видно', async () => {
            render(<Header />)
            const popupMenu = screen.getByTestId('popup-menu')

            await userEvent.click(screen.getByTestId('popupmenu-burger-button'))
            await userEvent.click(screen.getByTestId('popupmenu-close-button'))
            expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.closed)
            expect(popupMenu).not.toBeVisible()
        })



    })
})