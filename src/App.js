import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/MyProfile';
import Rockets from './components/pages/Rockets';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
