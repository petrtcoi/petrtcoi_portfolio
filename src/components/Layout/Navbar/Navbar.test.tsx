import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'


describe('Navbar', () => {

    test('Выводится ссылка на главную странциу', () => {
        render(<Navbar />)
        expect(screen.getByRole('link', { name: /логотип react/i })).toBeVisible()
        expect(screen.getByRole('link', { name: /логотип react/i })).toHaveAttribute('href', '/')
    })

    test('Выводится Заголовок в шапке', () => {
        render(<Navbar />)
        expect(screen.getByRole('heading', { name: 'Petr Tcoi', level: 1 })).toBeVisible()
    })

    test('Есть бургер, кнопка для открытия меню', () => {
        render(<Navbar />)
        expect(screen.getByRole('button', { name: /открыть меню/i })).toBeVisible()
    })

})