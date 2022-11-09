import { screen, render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {

  beforeEach(() => {
    render(
      <Layout>
        <div data-testid="some-test-child" />
      </Layout>
    )
  })

  
  test('Layout отображает Navbar', () => {
    expect(screen.getByTestId('layout-header')).toBeVisible()
  })

  test('Layout отображает Footer', () => {
    expect(screen.getByTestId('layout-footer')).toBeVisible()
  })

  test('Layout отображает  Child component', () => {
    expect(screen.getByTestId('some-test-child')).toBeVisible()
  })

})