import './App.css';
import 'react-chatbot-kit/build/main.css';
import { Route, Routes } from 'react-router-dom';
import AdminPage from './AdminPages/Admin';
import Home from './Home';
import LoginPage from './LoginPage/Login';

function App() {

  return (
   
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Admin' element={<AdminPage />}></Route>
          <Route path='/Login' element={<LoginPage />}></Route>
        </Routes>
  );
}

export default App;
