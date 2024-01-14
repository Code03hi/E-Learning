import './App.css';
import Navbar from './Component/NavBar'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/*' element={<Navigate to="/"/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
