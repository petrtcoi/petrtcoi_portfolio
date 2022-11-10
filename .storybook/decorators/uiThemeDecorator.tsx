import { DecoratorFn } from "@storybook/react"
import React from "react"

import { Theme } from '../../src/theme/theme.enum'
import { setUiTheme } from "./../../src/shared/helpers/setUiTheme"

export const uiThemeDecorator: DecoratorFn = (Story, options) => {
  const { UiTheme } = options.args

  if (UiTheme !== undefined && UiTheme in Theme) {
    setUiTheme(UiTheme)
  } else {
    setUiTheme(Theme.dark)
  }

  return (
    <Story { ...options } />
  )
}