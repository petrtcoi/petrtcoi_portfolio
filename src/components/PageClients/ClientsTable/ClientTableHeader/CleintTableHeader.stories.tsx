import React from 'react'
import { Meta, Story } from '@storybook/react'

import ClientTableHeader, { ClientTableHeaderProps } from './CleintTableHeader'

import { UiThemeControl, UiThemeType } from '../../../../shared/helpers/storybookUiThemeControl'
import { Theme } from '../../../../theme/theme.enum'




export default {
  component: ClientTableHeader,
  title: 'ClientTable/Header',
  argTypes: {
    ...UiThemeControl
  },
  parameters: {
    chromatic: { viewports: [700, 801, 1200] }
  }
} as Meta<ClientTableHeaderProps>



const Template: Story<ClientTableHeaderProps & UiThemeType> = (args) => {
  return (
    <table>
      <ClientTableHeader { ...args } />
    </table>
  )
}

export const Default = Template.bind({})
Default.args = {
  UiTheme: Theme.dark,
  label: 'test'
}

export const DefaultMobile = Template.bind({})
DefaultMobile.args = {
  ...Default.args
}
DefaultMobile.parameters = { viewport: { defaultViewport: "mobile" } }

