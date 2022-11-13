import { ThemeColorSchema } from "../types/ui.type"


export const UiThemeControl = {
  UiTheme: {
    options: ThemeColorSchema,
    control: { type: 'radio' },
  }
}

export type UiThemeType = { UiTheme: ThemeColorSchema }


