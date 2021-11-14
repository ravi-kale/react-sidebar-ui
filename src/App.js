import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
    </Router>
    </>
  );
}
export default App;