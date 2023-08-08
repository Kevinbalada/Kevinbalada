import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const productos = [
    { id: 1, name: "Campera Dione", description: "Campera Roja", category: "cat1" },
    { id: 2, name: "Campera Poseidon", description: "Campera Azul invernal", category: "cat1" },
    { id: 3, name: "Campera Mited", description: "Campera Gris con detalles polares", category: "cat1" },
    { id: 4, name: "Pantalon Jason", description: "Pantalon Clasico", category: "cat2" },
    { id: 5, name: "Pantalon Moon", description: "Pantalon Casual", category: "cat2" },
    { id: 6, name: "Pantalon Rocks", description: "Pantalon All day", category: "cat2" },
    { id: 7, name: "Remera Kiss", description: "Remera Con Bordes", category: "cat3" },
    { id: 8, name: "Remera Bs", description: "Remera Manga larga", category: "cat3" },
    { id: 9, name: "Remera Orchid", description: "Remera Frezze", category: "cat3" },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay productos"));
    }
  });

  getProductos
    .then((res) => console.log(res))
    .catch((error) => console.error(error));

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailContainer;
