import { DecoratorFn } from "@storybook/react"
import React from "react"

import { Theme } from '../../src/theme/theme.enum'
import setUiTheme from "./../../src/shared/helpers/setUiTheme"

export const uiThemeDecorator: DecoratorFn = (Story, options) => {
  const { _uiTheme } = options.args

  if (_uiTheme !== undefined && _uiTheme in Theme) {
    setUiTheme(_uiTheme)
  }

  return (
    <Story { ...options } />
  )
}