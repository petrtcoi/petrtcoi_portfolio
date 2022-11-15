import { render } from '@testing-library/react'
import Highlighted from './Highlighted'

const testText = 'Это некоторый текст, который содержит разную информацию, кОторЫЙ имеет разное написание. это'


describe('Highlighter UI-Component', () => {
  test('Выводит тот же текст, если нет ключевых слов', () => {
    const { container } = render(<Highlighted text={ testText } keywords={ [] } classString={ "" } />)
    expect(container.innerHTML).toBe(testText)
  })

  test("Выделяет одно кусок текста, даже если оно встречается несколько раз", () => {
    const { container } = render(
      <Highlighted
        text={ testText }
        keywords={ ['который'] }
        classString={ "someClass" }
      />
    )
    expect(container.innerHTML).toBe('Это не<span class="someClass">который</span> текст, <span class="someClass">который</span> содержит разную информацию, <span class="someClass">кОторЫЙ</span> имеет разное написание. это')
  })

  test("Выделяет текст, если он в начале или конце строки", () => {
    const { container } = render(
      <Highlighted
        text={ testText }
        keywords={ ['это'] }
        classString={ "someClass" }
      />
    )
    expect(container.innerHTML).toBe('<span class="someClass">Это</span> некоторый текст, который содержит разную информацию, кОторЫЙ имеет разное написание. <span class="someClass">это</span>')
  })

  test("Выделяет несколько ключевых слов", () => {
    const { container } = render(
      <Highlighted
        text={ testText }
        keywords={ ['это', 'который'] }
        classString={ "someClass" }
      />
    )
    expect(container.innerHTML).toBe('<span class="someClass">Это</span> не<span class="someClass">который</span> текст, <span class="someClass">который</span> содержит разную информацию, <span class="someClass">кОторЫЙ</span> имеет разное написание. <span class="someClass">это</span>')
  })


})