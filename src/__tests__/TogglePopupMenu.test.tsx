import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import Navbar from '../components/Layout/Navbar/Navbar'

import { MenuStatus } from '../types/ui.type'




describe('Toggle PopupMenu', () => {


    test('Popup меню скрыто и имеет статус закрыто', () => {
        render(<Navbar />)
        const popupMenu = screen.getByTestId('popup-menu')
        expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.closed)
    })

    test('Клик по бургеру меняет статус меню на открыто', async () => {
        render(<Navbar />)
        const popupMenu = screen.getByTestId('popup-menu')
        await userEvent.click(screen.getByTestId('popupmenu-burger-button'))
        expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.open)
    })

    test('Клик по бургеру делает ставит на него свойстро "скрыть"', async () => {
        render(<Navbar />)
        const burgerButton = screen.getByTestId('popupmenu-burger-button')
        await userEvent.click(burgerButton)
        expect(burgerButton.dataset.shouldHide).toBe("true")
    })


    test('Клик по ClosedIcon меняет статус на закрыто', async () => {
        render(<Navbar />)
        const popupMenu = screen.getByTestId('popup-menu')

        await userEvent.click(screen.getByTestId('popupmenu-burger-button'))
        await userEvent.click(screen.getByTestId('popupmenu-close-button'))
        expect(popupMenu.dataset.popupmenuStatus).toEqual(MenuStatus.closed)
    })


    test('Snapshot test - начальное состояние', () => {
        const { asFragment } = render(<Navbar />)
        expect(asFragment()).toMatchSnapshot()
    })
    test('Snapshot test - после клика по бургеру', () => {
        const { asFragment } = render(<Navbar />)
        screen.getByTestId('popupmenu-burger-button')
        expect(asFragment()).toMatchSnapshot()
    })


})