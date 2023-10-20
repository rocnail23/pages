import "./Mylabel.css"


interface Props {
     /**
   * what text should contain the label be?
   */
    label?: string,
    /**
   * How large should the label be?
   */
    size: 'normal'|'h1'|'h2'|'h3'|"h4",

    allCaps?: boolean,

    color?: "primary" | "secondary" |  "tertiary",

    customFontColor?: string
}

export const Mylabel = ({
label = "MyLabel",
size="normal",
allCaps=false,
color="primary",
customFontColor
}:Props) => {
  return (
    <span className={`label ${size} text-${color}`}
    style={{color:`${customFontColor}`}}>
        {allCaps ? label.toUpperCase() : label}
        </span>
  )
}
