import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar';
import Home from './components/home-Manager';
import PartsManager from './components/parts-manager';
import PlaceOrder from './components/plcOrder-Manager';
import UserSettings from './components/user-settings';
import LoginPage from './components/login-page';
import RegisterPage from './components/register-page';
import { AuthProvider } from './components/auth-context';
import OrderTable from './components/order-manager';

function App() {
  return (<>
    <AuthProvider>
        <NavBar />
        
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/parts' element={<PartsManager />} />
            <Route path='/orders' element={<PlaceOrder />} />
            <Route path='/settings' element={<UserSettings />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path= '/order' element = {<OrderTable />} />
        </Routes>
    </AuthProvider>
  </>);
}

export default App;
