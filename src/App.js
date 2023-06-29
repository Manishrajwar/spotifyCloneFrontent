import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useCookies } from "react-cookie";

function App() {
  const [cookie , setCookie , removeCookie] = useCookies(["token"]);
  console.log(`cookie + ${cookie}`);
  return (
   <div className='w-full  font-poppins'>

    {
      cookie.token?(
        <Routes>
        <Route path='/home' element={<Home btn1={'Logout'} removeCookie={removeCookie} />} />
        {/* kisi bhi path pe jaega usse redirect kr do , home page pe */}
        <Route path='*' element={<Navigate to="/home" />} />
  </Routes>
      ):(
        
        <Routes>
          <Route path='/home' element={<Home btn1={'signup'} btn2={'login'} />} />
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
