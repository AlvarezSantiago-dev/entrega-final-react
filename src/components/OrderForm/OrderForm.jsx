import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { OrderContext } from '../../context/OrderContext';
import styles from './orderform.module.css';

export const OrderForm = () => {
  const { addOrderDB } = useContext(OrderContext);
  const { cartItems, totalCartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    phone: '',
  });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrderId = await addOrderDB(cartItems, formData, totalCartItems);
    setOrderId(newOrderId);
    console.log('Datos del formulario:', formData);
  };

  useEffect(() => {
    if (orderId) {
      alert(`Tu pedido ha sido enviado correctamente! Su número de orden es ${orderId}`);
      setOrderId(null);
    }
  }, [orderId]);

  return (
    <>
      <form className={styles.orderForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar Orden</button>
      </form>
    </>
  );
};