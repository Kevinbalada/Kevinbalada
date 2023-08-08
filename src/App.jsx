import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'
import Contact from './components/Contact'
import Item from './components/Item'




const App = () => {
  return (
   <BrowserRouter>
   <NavBar />

    <Routes> 

    <Route exact path='/' element= {<Home/>} />
    <Route exact path='/cart' element= {<Cart/>} />
    <Route exact path='/category/:category' element= {<ItemListContainer/>} />
    <Route exact path='/item:id' element= {<ItemDetailContainer/>} />
    

    </Routes>

  </BrowserRouter>
  )
}










 export default App