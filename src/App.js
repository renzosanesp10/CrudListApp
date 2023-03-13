import './App.css';
import { useEffect } from 'react';


import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import { TasKContextProvider } from './context/TaskContext';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { supabase } from './supabase/client';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })

  }, [])


  return (
    <div className="App">
      <TasKContextProvider>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </TasKContextProvider>
    </div>
  );
}

export default App;
