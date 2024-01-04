
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
