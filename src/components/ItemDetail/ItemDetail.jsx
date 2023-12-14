import { Contador } from "../Contador/Contador";
import styles from "./itemdetail.module.css"
export const ItemDetail = ({ name, description, image, stock, price }) => {
    

    return(
        <>
        <h1>HOLA SOY ITEMDETAIL</h1>
        <div className={styles.itemdetail}>
            <h4>{name}</h4>
            <img src={image} alt="" />
            <div>
                <div>
                    <p> {price} </p>
                    <Contador max={stock}/>
                </div>
                <div><p>{description}</p></div>
            </div>
        </div>
        </>
    )
};