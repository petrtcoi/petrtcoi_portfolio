import { Story } from '@storybook/react'
import React from 'react'
import ClientTableHeader, { ClientTableHeaderProps } from './CleintTableHeader'

const storyDefault = {
  component: ClientTableHeader,
  title: 'ClientTable/Header',
}
export default storyDefault

const Template: Story<ClientTableHeaderProps> = (args) => {
  return (
    <table>
      <ClientTableHeader { ...args } />
    </table>
  )


}



export const ClientTableHeaderDefault = Template.bind({})
ClientTableHeaderDefault.args = {

}