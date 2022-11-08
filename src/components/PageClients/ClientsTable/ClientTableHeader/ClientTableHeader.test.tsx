import { render, screen } from '@testing-library/react'

import * as story from './CleintTableHeader.stories'

test('should render TableHeader в DarkMode Desktop', () => {
  render(<story.DesktopDark />)
  expect(screen.getByTestId('table-clients__header')).toBeVisible()
})

test('Snapshot TableHeader в DarkMode Desktop', () => {
  expect(screen.getByRole('table')).toMatchSnapshot()
})