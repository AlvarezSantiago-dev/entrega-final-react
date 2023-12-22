import { useContext, useState } from 'react';
import styles from './orderform.module.css';
import { CartContext } from '../../context/CartContext';
export const OrderForm = () => {
  const {addOrderDB, cartItems, totalCartItems, orderId} = useContext(CartContext)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrderDB(cartItems, formData, totalCartItems)
    // Aquí puedes agregar la lógica para enviar los datos o hacer lo que necesites con ellos
    console.log('Datos del formulario:', formData);
    alert(`Pedido realizado correctamente! El número de pedido es `, orderId);
    
    {cartItems.map((item) => (
      <li key={item.id}>
          {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
      </li>
  ))}
<b>Total de la compra: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</b>
  };

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
   
    {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                            </li>
                        ))}
    <b>Total de la compra: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}</b>
    </>
  );
};

