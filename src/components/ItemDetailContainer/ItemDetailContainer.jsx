
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getProductById = async (id) => {
        try {
            if (!id) {
                console.error("ID no válido");
                return;
            }

            const productId = doc(db, "productos", id);
            const resp = await getDoc(productId);

            if (resp.exists()) {
                const prod = {
                    id: resp.id,
                    ...resp.data()
                };
                setItem(prod);
                setIsLoading(false); // Actualizado aquí
            } else {
                console.error("El producto no existe");
                setIsLoading(false); // Manejar el caso en que el producto no existe
            }
        } catch (error) {
            console.error("Error al obtener el documento:", error);
            setIsLoading(false); // Manejar errores
        }
    };
    useEffect(() => {
        setIsLoading(true);
        getProductById(id);


    }, [id]);

    return (
        <div>
            {isLoading ? <Loading /> : item && <ItemDetail {...item} />}
        </div>
    );
};
//{isLoading ? <Loading /> : item ? <ItemDetail {...item} /> : <p>Detalles no disponibles</p>}