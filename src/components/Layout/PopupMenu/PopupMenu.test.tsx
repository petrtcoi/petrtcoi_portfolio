import { render, screen } from '@testing-library/react'

import PopupMenu from './PopupMenu'
import { MenuStatus } from '../../../assets/types/ui.type'


describe('PopupMeu', () => {

  const getNav = () => screen.getByRole('navigation')

  test('Popupmenu имеет data-popupmenu-status=closed если props.menuStatus = closed', () => {
    render(<PopupMenu menuStatus={ MenuStatus.closed } closeMenuFunc={ () => { } } />)
    expect(getNav()).toHaveAttribute('data-state-popupmenu-status', 'closed')
  })

  test('Popupmenu имеет data-popupmenu-status=opened если props.menuStatus = opened', () => {
    render(<PopupMenu menuStatus={ MenuStatus.open } closeMenuFunc={ () => { } } />)
    expect(getNav()).toHaveAttribute('data-state-popupmenu-status', 'open')
  })
})