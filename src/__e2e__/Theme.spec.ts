import { test, expect, type Page, Locator } from '@playwright/test'
import { Theme } from '../theme/theme.enum'
import { pages } from './helpers/pages'



test.describe('Theme swicthing', () => {

    let page: Page
    let themeSwitcher: Locator
    let burgerIcon: Locator
    let htmlTag: Locator

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage()
        await page.goto(pages.home)
        await page.waitForTimeout(500)
        themeSwitcher = page.getByRole('switch', {name: /переключение темы/i})
        burgerIcon = page.getByRole('button', { name: /открыть меню/i })
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

        await expect(page).toHaveScreenshot('dark_theme.png')
    })



    test("Клик по ThemeSwitcher переключает тему на LIGHT", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(200)

        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(Theme.light)

        // expect(await page.getByTestId('worklist').screenshot()).toMatchSnapshot('worklist.png')
    })





    test("Клик по ThemeSwitcher второй раз вернет тему обратно на DARK", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(200)

        await themeSwitcher.click()
        await themeSwitcher.click()
        const theme2 = await htmlTag.getAttribute('data-theme')
        expect(theme2).toBe(Theme.dark)

        // const buffer = await burgerIcon.screenshot()

    })

})




