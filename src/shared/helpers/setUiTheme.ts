import { Theme } from "../../theme/theme.enum"

const setUiTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme)
}

export default setUiTheme