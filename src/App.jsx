import DefaultLayout from './layouts/default';
import Home from './routes/Home/home'
import About from './routes/About'
import Category from './routes/Category/category';
import Error404 from './routes/Errors/error404';
import Shop from './routes/Shop/shop';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

function App() {

  return (createBrowserRouter(
            createRoutesFromElements(
              <Route path="/" element={<DefaultLayout />} errorElement={<Error404 />}>
                <Route index element={<Home />}/>
                {/* <Route path='/shop' element={<Shop />}/> */}
                <Route path='/category/:category' element={<Category />}/>
                <Route path="/about" element={<About />} />
              </Route>
        )))
}

export default App;
