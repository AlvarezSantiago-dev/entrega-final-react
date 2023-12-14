
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Loading } from "../Loading/Loading";
import { seedProducts } from "../../utils/seedProducts";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { Item } from "../Item/Item";
import styles from "./itemlistcontainer.module.css"
export const ItemListContainer = () => {

    const { category } = useParams();

    const [productos, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const getProductsDB = (category) => {
        const myProducts = category
            ? query(collection(db, "productos"), where("category", "==", category))
            : query(collection(db, "productos"));
        getDocs(myProducts).then((resp) => {
            if (resp.size === 0) {
                console.log("No hay productos en la base de datos");
            }
            const productList = resp.docs.map((doc) =>
            ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productList);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        setIsLoading(true);
        getProductsDB(category)
        //seedProducts(); //Sembrador!! Importante dejarlo comentado y usarlo una sola vez para actulizar los productos.
    }, [category]);

    return (
            <div className={styles.itemlistcont}>
                {isLoading ? (
                    <Loading />
                ) : (
                    productos.map((productos) => (
                        <div key={productos.id} className={styles.itemlistcont}>
                            <Item {...productos} />
                        </div>
                    ))
                )}
            </div>
    )
};

/*
    return (
        <div className={styles.container}>
            {isLoading ? (
                <Loading />
            ) : (
                productos.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <ItemCard {...product} />
                    </div>
                ))
            )}
        </div>
    );


*/

