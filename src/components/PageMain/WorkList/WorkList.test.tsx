import { render, screen } from '@testing-library/react'
import WorkList from './WorkList'

import { works } from '../../../__tests__/data/works'

describe('WorkList Section', () => {

    describe("WORKLIST", () => {
        test('Выводится', async () => {
            render(<WorkList works={ [] } />)
            expect(screen.getByRole('list', {name: /список работ/i})).toBeVisible()
        })
        test('Выводит заголовок <h2> "Список работ"', async () => {
            render(<WorkList works={ [] } />)
            expect(screen.getByRole('heading', {level: 2, name: /список работ/i})).toBeVisible()
        })
        test('display correct qnty of works', async () => {
            render(<WorkList works={ works } />)
            expect(screen.getAllByRole('listitem', {name: /работа/i}).length).toBe(works.length)
        })
        test('Display all work titles', async () => {
            render(<WorkList works={ works } />)
            for (const work of works) {
                expect(screen.getByRole('heading', {name: work.title})).toBeVisible()
            }
        })
    })
})