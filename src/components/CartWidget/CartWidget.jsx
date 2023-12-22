
import { useContext, useId } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./cart.module.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";



export const CartWidget = () => {
  const { cartItems, totalCartItems, removeItem } = useContext(CartContext);
  const cartCheckboxId = useId()
  return (
    <>
      <label className={styles.cartbutton} htmlFor={cartCheckboxId}>
        <img src="/src/img/cart.png" alt="" />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className={styles.cart}>

        {cartItems.map((item) => (
          <div key={item.id} className={styles.product}>
            <div className={styles.tittle}>
              {item.name}
              </div>
            <img src={item.image} alt="" />
            <section className={styles.info}></section>
            <span>Precio unitario ${item.price}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Sub total: {item.subTotal}</span>
            <Button text={"Eliminar"} functionClick={() => { removeItem(item.id) }} />
          </div>

        )
        
        )

        }
       <footer>
       {totalCartItems > 0 ? (
          <Link to={"/checkout"}>
            <Button text={"Completar Compra"} />
          </Link>
        ) : (
          "Carrito vacio"
        )}

        <strong>Suma total del carrito ${totalCartItems} </strong>
       </footer>
        
      </aside>
      

    </>
  );
};
