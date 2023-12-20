
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SingleProduct from './pages/SingleProduct';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />} >
          <Route index element={<Homepage />} />
          <Route path='/single-product' element={<SingleProduct />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
