import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import Navbar from '../components/Layout/Navbar/Navbar'

import { MenuStatus } from '../types/ui.type'




describe('Toggle PopupMenu', () => {

  const getPopupMenu = () => screen.getByRole('navigation', { name: /popup меню/i })
  const getOpenMenuButton = () => screen.getByRole('button', { name: /открыть меню/i })
  const getCloseMenuButton = () => screen.getByRole('button', { name: /закрыть меню/i })



  test('Popup меню скрыто и имеет статус закрыто', () => {
    render(<Navbar />)
    expect(getPopupMenu().dataset.popupmenuStatus).toEqual(MenuStatus.closed)
  })

  test('Клик по бургеру меняет статус меню на открыто', async () => {
    render(<Navbar />)
    await userEvent.click(getOpenMenuButton())
    expect(getPopupMenu().dataset.popupmenuStatus).toEqual(MenuStatus.open)
  })

  test('Клик по бургеру делает ставит на него свойстро "скрыть"', async () => {
    render(<Navbar />)
    await userEvent.click(getOpenMenuButton())
    expect(getOpenMenuButton().dataset.shouldHide).toBe("true")
  })


  test('Клик по ClosedIcon меняет статус на закрыто', async () => {
    render(<Navbar />)
    await userEvent.click(getOpenMenuButton())
    await userEvent.click(getCloseMenuButton())
    expect(getPopupMenu().dataset.popupmenuStatus).toEqual(MenuStatus.closed)
  })


  test('Snapshot test - начальное состояние', () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('Snapshot test - после клика по бургеру', async () => {
    const { asFragment } = render(<Navbar />)
    await userEvent.click(getOpenMenuButton())
    expect(asFragment()).toMatchSnapshot()
  })


})