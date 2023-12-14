
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loading } from "../Loading/Loading";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        
    }, []);

    return (
        <div>
            {isLoading ? <Loading /> : item ? <ItemDetail {...item} /> : <p>Detalles no disponibles</p>}
        </div>
    );
};
