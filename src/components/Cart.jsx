import React from "react";
import ItemListContainer from "./ItemListContainer";


const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrito de compras</h2>
      
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            
          </div>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};
export default Cart