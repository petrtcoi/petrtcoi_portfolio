import { test, expect, type Page, Locator } from '@playwright/test'
import { ThemeColorSchema } from '../assets/types/ui.type'
import { pages } from './utils/pages'
import { changeThemeDuatationMs } from './utils/variables'

test.describe('Theme swicthing', () => {

    let page: Page
    let themeSwitcher: Locator
    let burgerIcon: Locator
    let htmlTag: Locator


    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto(pages.home)
        
        themeSwitcher = page.getByRole('switch', { name: /переключение темы/i })
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
        expect(theme).not.toBe(ThemeColorSchema.light)
    })
    test("Проверка screenshot dark_theme при начальной загрузке", async () => {
        await htmlTag.getAttribute('data-theme')
        await expect(page).toHaveScreenshot('dark_theme.png')
    })


    test("Клик по ThemeSwitcher переключает для <html> атрибут data-theme в значение light", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(ThemeColorSchema.light)
    })
    test("Проверка screenshot light_theme после смены темы", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await themeSwitcher.click()
        await expect(page).toHaveScreenshot('light_theme.png')
    })


    test("Клик по ThemeSwitcher второй раз вернет тему обратно на DARK", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)

        await themeSwitcher.click()
        await themeSwitcher.click()
        const theme = await htmlTag.getAttribute('data-theme')
        expect(theme).toBe(ThemeColorSchema.dark)
    })

    test("Проверка screenshot daek_theme_2 после повторного переключения темы", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await themeSwitcher.click()
        await themeSwitcher.click()
        await expect(page).toHaveScreenshot('dark_theme_2.png')
    })
   
})




