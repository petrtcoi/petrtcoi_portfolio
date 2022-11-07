import { render, screen } from '@testing-library/react'
import { MenuStatus } from '../../../types/ui.type'
import PopupMenu from './PopupMenu'


describe('PopupMeu', () => {

  const getNav = () => screen.getByRole('navigation')

  test('Popupmenu имеет data-popupmenu-status=closed если props.menuStatus = closed', () => {
    render(<PopupMenu menuStatus={ MenuStatus.closed } closeMenuFunc={ () => { } } />)
    expect(getNav()).toHaveAttribute('data-popupmenu-status', 'closed')
  })

  test('Popupmenu имеет data-popupmenu-status=opened если props.menuStatus = opened', () => {
    render(<PopupMenu menuStatus={ MenuStatus.open } closeMenuFunc={ () => { } } />)
    expect(getNav()).toHaveAttribute('data-popupmenu-status', 'open')
  })

})