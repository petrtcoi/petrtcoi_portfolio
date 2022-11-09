import { test, expect, type Page, Locator } from '@playwright/test'
import { Theme } from '../theme/theme.enum'
import { pages } from './helpers/pages'
import { changeThemeDuatationMs } from './helpers/variables'



test.describe('Theme swicthing', () => {

    let page: Page
    let themeSwitcher: Locator
    let burgerIcon: Locator
    let htmlTag: Locator


    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto(pages.home)
        themeSwitcher = page.getByRole('switch', {name: /переключение темы/i})
        burgerIcon = page.getByRole('button', { name: /открыть меню/i })
        htmlTag = page.locator('html')
    })


    test("Все элементы на месте", async () => {
        await expect(themeSwitcher).toBeVisible()
        await expect(burgerIcon).toBeVisible()
        await expect(htmlTag).toBeVisible()
    })


    test("При загрузке страницы у тега <html> атрибут data-theme НЕ имеет занчение light", async () => {
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).not.toBe(Theme.light)

        await expect(page).toHaveScreenshot('dark_theme.png')
    })



    test("Клик по ThemeSwitcher переключает для <html> атрибут data-theme в значение light", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(Theme.light)
    })



    test("Клик по ThemeSwitcher второй раз вернет тему обратно на DARK", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)

        await themeSwitcher.click()
        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(Theme.dark)
    })

})




