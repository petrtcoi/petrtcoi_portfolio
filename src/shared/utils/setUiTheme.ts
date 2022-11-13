import { ThemeColorSchema } from "../../assets/types/ui.type"

const setUiTheme = (theme: ThemeColorSchema) => {
  document.documentElement.setAttribute("data-theme", theme)
}

export { setUiTheme }
