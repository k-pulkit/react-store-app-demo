import DefaultLayout from './layouts/default';
import Categories from './routes/categories'
import About from './routes/about'
import Error404 from './routes/error/Error404';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path="/" element={<DefaultLayout />} errorElement={<Error404 />}>
          <Route index element={<Categories />}/>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>)
}

export default App;
