import { DecoratorFn } from "@storybook/react"
import React from "react"

import { Theme } from '../../src/theme/theme.enum'
import setUiTheme from "./../../src/shared/helpers/setUiTheme"

export const ThemeDecorator: DecoratorFn = (Story, options) => {
  const { _theme } = options.args
  if (_theme !== undefined && _theme in Theme) {
    setUiTheme(_theme)
  }

  return (
    <Story { ...options } />
  )
}