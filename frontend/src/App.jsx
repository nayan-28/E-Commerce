import Navbar from './Components/Navbar/Navbar'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'



function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<ShopCategory category="mens"/>}></Route>
      <Route path='womens' element={<ShopCategory category="womens"/>}></Route>
      <Route path='kids' element={<ShopCategory category="kids"/>}></Route>
      <Route path='product' element={<Product/>}></Route>
      <Route path=':productId' element={<Product/>}></Route>
      <Route path='\cart' element={<Cart/>}></Route>
      <Route path='\login' element={<LoginSignUp/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
