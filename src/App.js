import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/pages/Missions';
import MyProfile from './components/pages/MyProfile';
import Rockets from './components/pages/Rockets';

const App = () => (
  <div className="main_container">
    <Navbar />
    <section>
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </section>
  </div>
);

export default App;
