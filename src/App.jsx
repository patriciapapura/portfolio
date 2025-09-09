import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DancePerformance from './pages/DancePerformance';
import Videography from './pages/Videography';
import TechResearch from './pages/TechResearch';
import PlanetwideCollective from './pages/PlanetwideCollective';
import TravelCulture from './pages/TravelCulture';
import WritingsPhilosophy from './pages/WritingsPhilosophy';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDancePage = location.pathname === '/dance-performance';

  return (
    <div className="app">
      <Header showNav={!isHomePage && !isDancePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dance-performance" element={<DancePerformance />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/tech-research" element={<TechResearch />} />
        <Route path="/planetwide-collective" element={<PlanetwideCollective />} />
        <Route path="/travel-culture" element={<TravelCulture />} />
        <Route path="/writings-philosophy" element={<WritingsPhilosophy />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
