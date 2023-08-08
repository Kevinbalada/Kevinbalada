import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'


const ItemListContainer = () => {
const {category} = useParams ()
const productList = [

  {id:1, name: "Campera Dione", description: "Campera Roja", category: "cat1"},
  {id:2, name: "Campera Poseidon", description: "Campera Azul invernal", category: "cat1"},
  {id:3, name: "Campera Mited", description: "Campera Gris con detalles polares", category: "cat1"},
  {id:4, name: "Pantalon Jason", description: "Pantalon Clasico", category: "cat2"},
  {id:5, name: "Pantalon Moon", description: "Pantalon Casual", category: "cat2"},
  {id:6, name: "Pantalon Rocks", description: "Pantalon All day", category: "cat2"},
  {id:7, name: "Remera Kiss", description: "Remera Con Bordes", category: "cat3"},
  {id:8, name: "Remera Bs", description: "Remera Manga larga", category: "cat3"},
  {id:9, name: "Remera Orchid", description: "Remera Frezze", category: "cat3"},
]

const getProducts = new Promise((resolve, reject) => {
  if (productList.length > 0) {
    setTimeout(() => {
      resolve(productList); //
    }, 2000);
  } else {
    reject(new Error("No hay productos"));
  }
});



getProducts
.then ((res) => { 
})
.catch((error) => {
  console.error(error)
})

const filteredProducts = productList.filter((product) => product.category === category)

return (
<Center p='1rem'>
  
  <ItemList
   productS={filteredProducts}  

  />
  </Center>
)

}

export default ItemListContainer