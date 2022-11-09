import { render, screen } from '@testing-library/react'
import WorkList from './WorkList'

import { works } from '../../../__tests__/data/works'

describe('WorkList Section', () => {

  const getWorkList = () => screen.getByRole('list', { name: /список работ/i })
  const getAllWorks = () => screen.getAllByRole('listitem', { name: /работа/i })
  const getWorkTitleByTitle = (title: string) => screen.getByRole('heading', { name: title })


  describe("WORKLIST", () => {

    beforeEach(() => {render(<WorkList works={ works } />)})

    test('Выводится', async () => {
      expect(getWorkList()).toBeVisible()
    })

    test('Выводит заголовок <h2> "Список работ"', async () => {
      expect(getWorkList()).toBeVisible()
    })

    test('display correct qnty of works', async () => {
      expect(getAllWorks().length).toBe(works.length)
    })

    test('Display all work titles', async () => {
      for (const work of works) {
        expect(getWorkTitleByTitle(work.title)).toBeVisible()
      }
    })
  })
})