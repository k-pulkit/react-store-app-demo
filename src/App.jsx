import DefaultLayout from './layouts/default';
import Home from './routes/Home/home'
import About from './routes/About'
import Category from './routes/Category/category';
import Error404 from './routes/Errors/error404';
import Cart from './routes/Cart/cart';

import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';

function App() {

  return (createHashRouter(
            createRoutesFromElements(
              <Route path="/" element={<DefaultLayout />} errorElement={<Error404 />}>
                <Route index element={<Home />}/>
                {/* <Route path='/shop' element={<Shop />}/> */}
                <Route path='/category/:category' element={<Category />}/>
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
        )))
}

export default App;
