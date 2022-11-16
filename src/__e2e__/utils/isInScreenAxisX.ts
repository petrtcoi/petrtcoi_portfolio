import { Locator, Page } from "@playwright/test"

type Props = {
  element: Locator,
  page: Page
}


export const isInScreenAxisX = async (props: Props): Promise<boolean> => {
  let isIn = false

  const rect = await props.element.boundingBox()
  const viewportSizes = props.page.viewportSize()
  if (rect === null) throw new Error("element's boundingBox is null")
  if (viewportSizes === null) throw new Error("page's viewportSize is null")

  if (rect.x < viewportSizes.width && (rect.x + rect.width) > 0) {
    isIn = true
  }
  
  return isIn
}