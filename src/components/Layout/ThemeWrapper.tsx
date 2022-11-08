import React from "react"
import { Theme } from "../../theme/theme.enum"


interface ThemeWrapperProps {
  theme?: Theme
  children: React.ReactNode
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = (props) => {

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", props.theme ? props.theme : Theme.dark)
  }, [props.theme])


  return (
    <>

      { props.children }

    </>
  )
}

export default ThemeWrapper