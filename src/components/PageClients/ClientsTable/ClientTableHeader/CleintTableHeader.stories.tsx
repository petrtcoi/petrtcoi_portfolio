import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'
import themeControl from '../../../../shared/helpers/themeControl'
import { Theme } from '../../../../theme/theme.enum'

import ClientTableHeader, { ClientTableHeaderProps } from './CleintTableHeader'



const storyDefault = {
  component: ClientTableHeader,
  title: 'ClientTable/Header',
  argTypes: {
    ...themeControl
  }
} as ComponentMeta<typeof ClientTableHeader>
export default storyDefault



const Template: Story<ClientTableHeaderProps> = (args) => {

  return (
    <table>
      <ClientTableHeader { ...args } />
    </table>

  )


}

export const DesktopDark = Template.bind({})
DesktopDark.args = {
  _theme: Theme.dark
}

export const DesktopLight = Template.bind({})
DesktopLight.args = {
  _theme: Theme.light
}