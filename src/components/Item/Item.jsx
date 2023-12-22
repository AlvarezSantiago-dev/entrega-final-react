import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button/Button"
import { Contador } from "../Contador/Contador"
import styles from "./Item.module.css"
import { useContext, useState } from "react";


export const Item = ({ id, name, price, stock, image }) => {
    const { addItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(1);

    const handleCountChange = (count) => {
        setItemCount(count);
    };

    return (
        <>
        <div className={styles.item}>
            
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <p>${price}</p>
                <div>

                    <Contador max={stock} countCambio={handleCountChange} />
                </div>
                <Link to={`/item/${id}`}>
                <Button text={"detalles"} />
            </Link>
                    <Button 
                        text="Agregar al carrito"
                        functionClick={() => addItem({ id, image, name, price }, itemCount)} />
                
            
        </div>
        </>
    )
};