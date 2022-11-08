import { DecoratorFn } from "@storybook/react"
import React from "react"
import { Theme } from '../../src/theme/theme.enum'

export const ThemeDecorator: DecoratorFn = (Story, options) => {
  const { _theme } = options.args
  if (_theme !== undefined && _theme in Theme) {
    document.documentElement.setAttribute("data-theme", _theme)
  }

  return (
    <Story { ...options } />
  )
}