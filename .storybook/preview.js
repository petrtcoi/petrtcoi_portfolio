import { uiThemeDecorator } from './decorators/uiThemeDecorator'

import '../src/assets/styles/_styles.css'


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




