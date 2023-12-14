
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./cart.module.css"
export const CartWidget = () => {
  const {  totalQuantity  } = useContext( CartContext);
  return (
    <div className={styles.cart}>
        <img src="/src/img/cart.png" alt="" />
        <span>{totalQuantity}</span>
    </div>
  )
}
