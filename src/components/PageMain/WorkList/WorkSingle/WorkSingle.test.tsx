import { render, screen } from '@testing-library/react'
import WorkSingle from './WorkSingle'

import { WorkLinkLabels } from '../../../../types/work.type'

import { works } from '../../../../__tests__/data/works'
import { linkSync } from 'fs'



describe('Work Single', () => {

    const workOne = works[0]
    beforeAll(() => {
        if (workOne.links.devto === undefined ||
            workOne.links.vcru === undefined ||
            workOne.links.local === undefined
        ) {
            throw new Error('Не правильно выбран для теста пример WORK. Нужны все ссылки на страницы')
        }
    })

    test('Загружается заголовок работы', async () => {
        render(<WorkSingle work={ workOne } />)
        expect(screen.getByRole("heading", {name: workOne.title})).toBeVisible()
    })

    test('Выводится описание работы', async () => {
        render(<WorkSingle work={ workOne } />)
        expect(screen.getByLabelText(/описание работы/i)).toHaveTextContent(workOne.description)
    })

    test('Теги работы выводятся через запятую', async () => {
        render(<WorkSingle work={ workOne } />)
        expect(screen.getByLabelText(/используемые технологии/i)).toHaveTextContent(workOne.tags.join(', '))
    })

    test('Выводит все ссылки на страницы', () => {
        render(<WorkSingle work={ workOne } />)
        for (const label of Object.values(WorkLinkLabels)) {
            expect(screen.getByText(label))
        }
    })

    test('Не выводит ссылки на drvto, если их нет в работе', () => {
        render(<WorkSingle work={ { ...workOne, links: { ...workOne.links, devto: undefined } } } />)
        expect(screen.queryByText(WorkLinkLabels.devto)).not.toBeInTheDocument()
    })
    test('Не выводит ссылки на vcru, если их нет в работе', () => {
        render(<WorkSingle work={ { ...workOne, links: { ...workOne.links, vcru: undefined } } } />)
        expect(screen.queryByText(WorkLinkLabels.vcru)).not.toBeInTheDocument()
    })
    test('Не выводит ссылки на локальную, если их нет в работе', () => {
        render(<WorkSingle work={ { ...workOne, links: { ...workOne.links, local: undefined } } } />)
        expect(screen.queryByText(WorkLinkLabels.local)).not.toBeInTheDocument()
    })
    
    

})