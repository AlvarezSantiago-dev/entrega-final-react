import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { createContext } from 'react';
import { db } from '../config/firebaseConfig';

export const OrderContext = createContext(null);

export const OrderContextProvider = ({ children }) => {
    const addOrderDB = async (cartItems, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartItems,
            data: serverTimestamp(),
            total,
        };

        const docRef = await addDoc(collection(db, 'orders'), newOrder);
        return docRef.id;
    };

    const contextValue = {
        addOrderDB,
    };

    return <OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>;
};
