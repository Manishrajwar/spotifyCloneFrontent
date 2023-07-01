import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import UplaodSong from './pages/UploadSong';
import Search from './Components/Search';
import { useContext } from 'react';
import { AppContext } from './Context/AppContext';

function App() {
 
const {cookie } = useContext(AppContext);
  return (
   <div className='w-full  font-poppins'>

    {
      cookie.token?(
        // login routes 

        <Routes>
        <Route path='/home' element={<Home   />} />
        {/* kisi bhi path pe jaega usse redirect kr do , home page pe */}
        <Route path='/uploadSong' element={<UplaodSong  />}  />
        <Route path='*' element={<Navigate to="/home" />} />
  </Routes>
      ):(
        
        // logout routes 
        <Routes>
          <Route path='/home' element={<Home  />} />
          <Route path='/search' element={<Search  />}   />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          {/* kisi bhi path pe jaega usse redirect kr do , login page mai  */}
          <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
      )
    }
    
   
   </div>
  );
}

export default App;
