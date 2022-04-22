
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';

function App() {
  return (
    <>
      <Navbar/>
      <div className='content'>
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
      </Routes>
      </div>
    </>
  )
}

export default App;
