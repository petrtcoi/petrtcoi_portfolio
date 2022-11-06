import { render, screen } from '@testing-library/react'
import WorkList from './WorkList'

import { works } from '../../../__tests__/data/works'

describe('WorkList Section', () => {

    describe("WORKLIST", () => {
        test('Выводится', async () => {
            render(<WorkList works={ [] } />)
            expect(screen.getByTestId('worklist')).toBeVisible()
        })
        test('Выводит заголовок <h2> "Список работ"', async () => {
            render(<WorkList works={ [] } />)
            expect(screen.getByTestId("worklist_title")).toHaveTextContent("Список работ")
        })
        test('display correct qnty of works', async () => {
            render(<WorkList works={ works } />)
            expect(screen.getAllByTestId('single_work').length).toBe(works.length)
        })
        test('Display all work titles', async () => {
            render(<WorkList works={ works } />)
            const workTitles = screen.getAllByTestId("single_work_title")
            for (const work of works) {
                expect(work.title in workTitles)
            }
        })
    })
})