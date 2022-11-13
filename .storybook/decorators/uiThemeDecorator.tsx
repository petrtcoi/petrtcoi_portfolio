import { DecoratorFn } from "@storybook/react"
import React from "react"
import { setUiTheme } from '../../src/assets/utils/setUiTheme'
import { ThemeColorSchema } from '../../src/assets/types/ui.type'


export const uiThemeDecorator: DecoratorFn = (Story, options) => {
  const { UiTheme } = options.args

  if (UiTheme !== undefined && UiTheme in ThemeColorSchema) {
    setUiTheme(UiTheme)
  } else {
    setUiTheme(ThemeColorSchema.dark)
  }

  return (
    <Story { ...options } />
  )
}