import React from 'react'

type HighlightedProps = {
  text: string,
  keywords: string[],
  classString: string
}

const Highlighted: React.FC<HighlightedProps> = (props) => {
  if (!props.keywords?.length) return (<>{ props.text }</>)

  const regex = RegExp(props.keywords.join('|'), "ig")
  const matches = props.text.match(regex)
  const splitedText = props.text.split(regex)


  if (matches === null) return (<>{ props.text }</>)
  return (
    <>
      { matches.map((match, index) => {
        return (
          <React.Fragment key={ index }>
            { splitedText[index] }
            <span className={ props.classString }>{ match }</span>
          </React.Fragment>
        )
      }) }
      { splitedText[splitedText.length - 1] }
    </>
  )
}

export default Highlighted