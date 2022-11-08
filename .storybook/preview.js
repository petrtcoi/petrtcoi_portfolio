import '../src/css/variables.css'
import '../src/css/fonts-faces.css'
import '../src/css/globals.css'
import '../src/css/tables.css'

import '../src/theme/theme.css'
import { ThemeDecorator } from './decorators/ThemeDecorator'


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // viewport: {
  //   viewports: INITIAL_VIEWPORTS,
  // },
}

export const decorators = [ThemeDecorator]