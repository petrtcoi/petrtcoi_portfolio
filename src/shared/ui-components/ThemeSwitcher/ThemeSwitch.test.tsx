import { render, screen, waitFor } from '@testing-library/react'
import ThemeSwitcher from './ThemeSwitcher'
import { setUiTheme } from './../../helpers/setUiTheme'
import userEvent from '@testing-library/user-event'
import { Theme } from '../../../theme/theme.enum'

jest.mock('./../../helpers/setUiTheme.ts', () => ({
  ...(jest.requireActual('./../../helpers/setUiTheme.ts')),
  setUiTheme: jest.fn()
}))

const getSwitcher = () => screen.getByRole('switch', { name: /переключение темы/i })
const getCheckbox = () => getSwitcher().firstChild as HTMLInputElement

describe('ThemeSwitcher', () => {



  
  beforeEach(() => render(<ThemeSwitcher />))
  afterEach(() => { jest.clearAllMocks() })

  test('Выводит элемент swicth', () => {
    expect(getSwitcher()).toBeVisible()
  })

  test('Выводит описания заголовок для светлой темы - "светлая"', () => {
    expect(screen.getByText(/cветлая/i)).toBeVisible()
  })

  test('Выводит описания заголовок для темной темы - "темная"', () => {
    expect(screen.getByText(/темная/i)).toBeVisible()
  })

  test('Checkbox в начальном состоянии "checked"', () => {
    expect(getCheckbox()).toBeChecked()
  })

  test('Клик по checkbox вызывает метод  setUiTheme с аргументов Theme.light', async () => {
    userEvent.click(getCheckbox())
    await waitFor(() => { expect(getCheckbox()).not.toBeChecked() })
    expect(setUiTheme).toBeCalledTimes(1)
    expect(setUiTheme).toBeCalledWith(Theme.light)
  })

  test('Два клика по checkbox вызовут setUiTheme два раза и последний аргумент будет Theme.dark', async () => {
    userEvent.click(getCheckbox())
    await waitFor(() => { expect(getCheckbox()).not.toBeChecked() })
    userEvent.click(getCheckbox())
    await waitFor(() => { expect(getCheckbox()).toBeChecked() })
    expect(setUiTheme).toBeCalledTimes(2)
    expect(setUiTheme).toBeCalledWith(Theme.dark)
  })

})