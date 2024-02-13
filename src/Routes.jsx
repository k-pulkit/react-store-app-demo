import Layout from './Layout';
import Categories from './sections/Categories'
import About from './sections/About'
import Error404 from './sections/Error404';

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function AppRoutes() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error404 />}>
        <Route index element={
          <div className="relative max-container mt-10 flex flex-row justify-center items-center">
            <Categories />
          </div>
        } />
        <Route path="/about" element={
          <div className="relative max-container mt-10 flex flex-row justify-center items-center">
            <About />
          </div>
        } />
      </Route>
  ))

  return router;
}

export default AppRoutes;
