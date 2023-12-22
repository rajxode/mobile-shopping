
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';


function App() {

  // routes 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      {/* homeroute  */}
      {/* render navbar and homepage */}
        <Route path='/' element={<Navbar />} >
          <Route index element={<Homepage />} />
        </Route>
      </>
    )
  )

  return (
    // router provider
    <RouterProvider router={router} />
  )
}

export default App;
