import { test, expect, type Page, Locator } from '@playwright/test'
import { isInScreenAxisX } from './utils/isInScreenAxisX'
import { pages } from './utils/pages'
import { changeThemeDuatationMs } from './utils/variables'



test.describe('Работа кнопки открытия и закрытия меню', () => {

    let page: Page
    let burgerIcon: Locator
    let popupMenu: Locator
    let closeMenuIcon: Locator

    test.beforeEach(async ({ browser }) => {
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

    test("Popup menu расположено за размерами экрана", async () => {
        const isIn = await isInScreenAxisX({ element: popupMenu, page })
        expect(isIn).toBe(false)
    })
    test("Popup menu находится в видимости экрана после клика по Burger", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        const isIn = await isInScreenAxisX({ element: popupMenu, page })
        expect(isIn).toBe(true)
    })
    test("Меню закрывается после клика по ClodeButton", async () => {
        await burgerIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs)
        await closeMenuIcon.click()
        await page.waitForTimeout(changeThemeDuatationMs * 2)
        const isIn = await isInScreenAxisX({ element: popupMenu, page })
        expect(isIn).toBe(false)
    })
})
