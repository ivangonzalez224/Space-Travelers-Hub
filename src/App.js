import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/pages/Missions';

const App = () => (
  <div className="main_container">
    <Navbar />
    <section>
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </section>
  </div>
);

export default App;
