import { test, expect, type Page, Locator } from '@playwright/test'
import { pages } from './helpers/pages'



test.describe('Работа кнопки открытия и закрытия меню', () => {

    let page: Page
    let screenWidth: number
    let burgerIcon: Locator
    let popupMenu: Locator
    let closeMenuIcon: Locator

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto(pages.home)

        burgerIcon = page.getByRole('button', { name: /открыть меню/i })
        popupMenu = page.getByRole('navigation', {name: /popup меню/i})
        closeMenuIcon = page.getByRole('button', { name: /закрыть меню/i })

        const screen = page.viewportSize()
        if (screen === null) throw new Error('screen is null')
        screenWidth = screen.width
    })

    test("Все элементы на месте", async () => {
        await expect(burgerIcon).toBeVisible()
        await expect(popupMenu).toBeVisible()
        await expect(closeMenuIcon).toBeVisible()
    })

    test("Меню скрыто при открытии страницы", async () => {
        const menuBoundary = await popupMenu.boundingBox()
        if (menuBoundary === null) throw new Error('menuBoundary is null')
        expect(menuBoundary.x).toBeGreaterThan(screenWidth)
    })

    test("Меню открывается после клика по Burger", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(200)    
        let menuBoundary = await popupMenu.boundingBox()
        if (menuBoundary === null) throw new Error('menuBoundary is null')
        expect(menuBoundary.x).toBeLessThan(screenWidth)

        await closeMenuIcon.click()
        await page.waitForTimeout(200)
        menuBoundary = await popupMenu.boundingBox()
        if (menuBoundary === null) throw new Error('menuBoundary is null')
        expect(menuBoundary.x).toBeGreaterThan(screenWidth)
    })
})
