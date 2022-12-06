import React from 'react'
import { Meta, Story } from '@storybook/react'

import WorkSingle from './WorkSingle'
import { WorkSingleProps } from './WorkSingle'
import { Work } from '../../../../assets/types/work.type'
import { UiThemeControl, UiThemeType } from '../../../../assets/utils/storybookUiThemeControl'
import { ThemeColorSchema } from '../../../../assets/types/ui.type'

export default {
  component: WorkSingle,
  title: 'MainPage/WorkSingle',

  argTypes: {
    ...UiThemeControl,
    work: {
      name: 'Single works props',
    }
  },
} as Meta<WorkSingleProps>

const Template: Story<WorkSingleProps & UiThemeType> = (args) => {
  return (
    <WorkSingle { ...args } />
  )
}

const defaultWork: Work = {
  title: 'Первая работа',
  publishDate: '22.11.2022',
  description: 'Описание работы с выделением ключевых слов. Должно работать для всех слов, входящих в текст. Не важно, одно это слово или их несколько.',
  keywords: ['слов'],
  links: {
    devto: 'https://dev.to',
    vcru: 'https://vs.ru',
    local: 'https://petrtcoi.com'
  }
}

export const Default = Template.bind({})
Default.args = {
  work: defaultWork,
  UiTheme: ThemeColorSchema.dark,
}

export const Without_DevTo_Link = Template.bind({})
Without_DevTo_Link.args = {
  ...Default.args,
  work: {
    ...defaultWork,
    links: {
      vcru: 'https://vs.ru',
      local: 'https://petrtcoi.com'
    }
  }
}

export const With_Two_Keywords = Template.bind({})
With_Two_Keywords.args = {
  ...Default.args,
  work: {
    ...defaultWork,
    keywords: ['слов', 'работы']
  }
}


