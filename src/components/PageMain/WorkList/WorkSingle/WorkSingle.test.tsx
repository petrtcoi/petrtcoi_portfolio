import { render, screen } from '@testing-library/react'
import WorkSingle from './WorkSingle'
import { works } from '../../../../__tests__/data/works'
import { WorkLinkLabels } from '../../../../assets/types/work.type'



describe('Work Single', () => {


  const getWorkByTitle = (title: string) => screen.getByRole("heading", { name: title })
  const getDescription = () => screen.getByLabelText(/описание работы/i)
  const getTagsList = () => screen.getByLabelText(/используемые технологии/i)

  const workOne = works[0]
  beforeAll(() => {
    if (
      workOne.links.devto === undefined ||
      workOne.links.vcru === undefined ||
      workOne.links.local === undefined
    ) {
      throw new Error('Не правильно выбран для теста пример WORK. Нужны все ссылки на страницы')
    }
  })


  test('Загружается заголовок работы', async () => {
    render(<WorkSingle work={ workOne } />)
    expect(getWorkByTitle(workOne.title)).toBeVisible()
  })

  test('Выводится описание работы', async () => {
    render(<WorkSingle work={ workOne } />)
    expect(getDescription()).toHaveTextContent(workOne.description)
  })

  test('Теги работы выводятся через запятую', async () => {
    render(<WorkSingle work={ workOne } />)
    expect(getTagsList()).toHaveTextContent(workOne.tags.join(', '))
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