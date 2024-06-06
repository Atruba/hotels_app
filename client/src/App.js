import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Loading from './components/Loading';
import Notification from './components/Notification';
import Room from './components/rooms/Room';
import LandingPage from './pages/LandingPage';


const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Room />
      
    </>
  );
};

export default App;