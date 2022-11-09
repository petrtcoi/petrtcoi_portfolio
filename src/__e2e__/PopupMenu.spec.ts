import { test, expect, type Page, Locator } from '@playwright/test'
import { pages } from './helpers/pages'
import { changeThemeDuatationMs } from './helpers/variables'



test.describe('Работа кнопки открытия и закрытия меню', () => {

    let page: Page
    let burgerIcon: Locator
    let popupMenu: Locator
    let closeMenuIcon: Locator

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto(pages.home)

        burgerIcon = page.getByRole('button', { name: /открыть меню/i })
        popupMenu = page.getByRole('navigation', { name: /popup меню/i })
        closeMenuIcon = page.getByRole('button', { name: /закрыть меню/i })
    })

    test("Все элементы на месте", async () => {
        await expect(burgerIcon).toBeVisible()
        await expect(popupMenu).toBeVisible()
        await expect(closeMenuIcon).toBeVisible()
    })

    test("Меню изначально имеет opacity: 0", async () => {
        const opacity = await popupMenu.evaluate(node => getComputedStyle(node).opacity)
        expect(opacity).toBe("0")
    })

    test("Меню открывается после клика по Burger", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        const opacity = await popupMenu.evaluate(node => getComputedStyle(node).opacity)
        expect(opacity).toBe("1")

    })
    test("Меню закрывается после клика по ClodeButton", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await closeMenuIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs * 2)
        const opacity = await popupMenu.evaluate(node => getComputedStyle(node).opacity)
        expect(opacity).toBe("0")
    })
})
