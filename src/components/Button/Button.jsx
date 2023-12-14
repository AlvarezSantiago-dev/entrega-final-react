import styles from "./button.module.css"

export const Button = ({text ="boton", functionClick, vartiantCss}) => {
    return (
        <button  className={vartiantCss} onClick={functionClick}> {text} </button>
    )
}
