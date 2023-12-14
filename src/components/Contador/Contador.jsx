import { useEffect } from "react";
import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";
//Enviamos el max y el countCambio
export const Contador = ({ max, countCambio }) => {
    const { count, increment, decrement } = useCount({ max });


    useEffect(() => {
        countCambio(count);
    }, [count, countCambio]);

    return (
        <>
            <Button text={"-"} functionClick={decrement} />
            <strong>{count}</strong>
            <Button text={"+"} functionClick={increment} />
        </>
    );
};