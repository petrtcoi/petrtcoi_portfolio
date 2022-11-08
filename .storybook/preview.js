import '../src/css/variables.css'
import '../src/css/fonts-faces.css'
import '../src/css/globals.css'
import '../src/css/tables.css'

import '../src/theme/theme.css'
import { uiThemeDecorator } from './decorators/uiThemeDecorator'

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '801px',
      height: '963px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '800px',
      height: '801px',
    },
  },
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
}



export const decorators = [uiThemeDecorator]



