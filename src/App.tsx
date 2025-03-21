import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FleetPage from './pages/FleetPage';
import VehicleDetailPage from './pages/VehicleDetailPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/flota" element={<Layout><FleetPage /></Layout>} />
      <Route path="/flota/:id" element={<Layout><VehicleDetailPage /></Layout>} />
      <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
      <Route path="/servicios" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/nosotros" element={<Layout><AboutPage /></Layout>} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
