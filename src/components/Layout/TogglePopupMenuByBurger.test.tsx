import { render, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import Navbar from '../../components/Layout/Navbar/Navbar'

import { MenuStatus } from '../../types/ui.type'



describe('Toggle PopupMenu by Burger ', () => {

  const getPopupMenu = () => screen.getByRole('navigation', { name: /popup меню/i })
  const getOpenMenuButton = () => screen.getByRole('button', { name: /открыть меню/i })
  const getCloseMenuButton = () => screen.getByRole('button', { name: /закрыть меню/i })

  beforeEach(() => render(<Navbar />))

  test('Popup меню скрыто и имеет статус закрыто', () => {
    expect(getPopupMenu().dataset.statePopupmenuStatus).toEqual(MenuStatus.closed)
  })

  test('Клик по бургеру меняет статус меню на открыто', async () => {
    await userEvent.click(getOpenMenuButton())
    expect(getPopupMenu().dataset.statePopupmenuStatus).toEqual(MenuStatus.open)
  })

  test('Клик по ClosedIcon меняет статус на закрыто', async () => {
    await userEvent.click(getOpenMenuButton())
    await userEvent.click(getCloseMenuButton())
    expect(getPopupMenu().dataset.statePopupmenuStatus).toEqual(MenuStatus.closed)
  })
})