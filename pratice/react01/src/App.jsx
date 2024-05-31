import Home from './pages/Home'
import { Header, Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import { Outlet } from 'react-router-dom';
import Test01 from './Test/Test01';
function App() {

  return (
    <>
      <Header/>
        <Test01/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
