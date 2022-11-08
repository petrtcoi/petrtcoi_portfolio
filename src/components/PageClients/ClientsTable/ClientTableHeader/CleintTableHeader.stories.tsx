import React from 'react'
import { Story } from '@storybook/react'

import ClientTableHeader from './CleintTableHeader'

import UiThemeControl from '../../../../shared/helpers/storybookUiThemeControl'
import { Theme } from '../../../../theme/theme.enum'




const storyDefault = {
  component: ClientTableHeader,
  title: 'ClientTable/Header',
  argTypes: {
    ...UiThemeControl
  },
  parameters: {
    viewport: { defaultViewport: "desktop" }
  }

} 
export default storyDefault



const Template: Story = (args) => {
  return (
    <table>
      <ClientTableHeader { ...args } />
    </table>

  )


}

export const DesktopDark = Template.bind({})
DesktopDark.args = {
  _uiTheme: Theme.dark
}

export const DesktopDarkMobile = Template.bind({})
DesktopDarkMobile.args = {
  _uiTheme: Theme.dark
}
DesktopDarkMobile.parameters = { viewport: { defaultViewport: "mobile" } }

export const DesktopLight = Template.bind({})
DesktopLight.args = {
  _uiTheme: Theme.light
}