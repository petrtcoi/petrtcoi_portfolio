import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import ClientTableHeader from './CleintTableHeader'

import * as _stories from './CleintTableHeader.stories'

const stories = composeStories(_stories)


describe('ClientTableHeader', () => {
  describe('Stories', () => {
    test('should show Email header at Desktop', () => {
      render(<stories.Default />)
      
      expect(screen.getByRole('columnheader', { name: /email/i })).toBeVisible()
    })
    test('should NOT show Email header at Mobile', () => {
      render(<stories.DefaultMobile />)
      expect(screen.getByRole('columnheader', { name: /email/i })).toBeVisible()
    })
  })

  describe('Component', () => {
    test('render with large screen', () => {
      render(<ClientTableHeader />)
      expect(screen.getByRole('columnheader', { name: /email/i })).toBeVisible()
    })
    test('render with large screen', () => {
      render(<ClientTableHeader />)
      expect(screen.getByRole('columnheader', { name: /email/i })).toBeVisible()
    })
  })
})




