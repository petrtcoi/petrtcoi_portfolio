import { Theme } from "../../theme/theme.enum"



export const UiThemeControl = {
  UiTheme: {
    options: Theme,
    control: { type: 'radio' },
  }
}

export type UiThemeType = { UiTheme: Theme }


