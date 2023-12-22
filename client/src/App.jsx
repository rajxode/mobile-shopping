
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navbar />} >
          <Route index element={<Homepage />} />
        </Route>
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;
