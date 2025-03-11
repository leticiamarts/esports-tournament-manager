import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout, PublicLayout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { TournamentCreation } from './pages/TournamentCreation';
import { Profile } from './pages/Profile';
import { LiveMatch } from './pages/LiveMatch';
import { Support } from './pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/tournaments/create" element={<DashboardLayout><TournamentCreation /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout><Profile /></DashboardLayout>} />
        <Route path="/match/:id" element={<DashboardLayout><LiveMatch /></DashboardLayout>} />
        <Route path="/support" element={<DashboardLayout><Support /></DashboardLayout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;