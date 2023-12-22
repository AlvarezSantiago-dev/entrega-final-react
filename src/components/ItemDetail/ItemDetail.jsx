import { Link } from "react-router-dom";
import { Contador } from "../Contador/Contador";
import styles from "./itemdetail.module.css"
import { Button } from "../Button/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
export const ItemDetail = ({ id, name, price, stock, image }) => {
    const { addItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(1);

    const handleCountChange = (count) => {
        setItemCount(count);
    };

    return (


        <div className={styles.itemdetail}>
            <Link to={`/`}>
                <Button text={"Regresar"} />
            </Link>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>${price}</p>
            <div>

                <Contador max={stock} countCambio={handleCountChange} />
            </div>

            <Button
                text="Agregar al carrito"
                functionClick={() => addItem({ id, image, name, price }, itemCount)} />


        </div>

    )

};