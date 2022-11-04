import { test, expect, type Page, Locator } from '@playwright/test'
import { Theme } from '../typings/ui'



test.describe('Работа кнопки открытия и закрытия меню', () => {

    let page: Page
    let themeSwitcher: Locator
    let burgerIcon: Locator
    let htmlTag: Locator

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto('http://localhost:3000/')
        await page.waitForTimeout(500)
        themeSwitcher = page.getByTestId('theme-switcher')
        burgerIcon = page.getByTestId('popupmenu-burger-button')
        htmlTag = page.locator('html')
    })


    test("Все элементы на месте", async () => {
        await expect(themeSwitcher).toBeVisible()
        await expect(burgerIcon).toBeVisible()
        await expect(htmlTag).toBeVisible()
    })

    test("При загрузке страницы стоит тема в значении DARK", async () => {
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(Theme.dark)
    })

    test("Клик по ThemeSwitcher переключает тему на LIGHT, потом - обратно", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(200)
        
        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(Theme.light)
        
        await themeSwitcher.click()
        const theme2 = await htmlTag.getAttribute('data-theme')
        expect(theme2).toBe(Theme.dark)
    })


})


