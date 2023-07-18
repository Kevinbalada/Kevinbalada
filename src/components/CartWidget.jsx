import React from 'react';
import cartIcon from '../assets/cart-icon.png';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={cartIcon} alt="Carrito" style={{ width: '50px', height: '50px' }} />
      <p>2</p>
    </div>
  );
};

export default CartWidget;
