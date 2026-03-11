import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Home from './pages/Home/Home';

// Destinations
import ExploreStates from './pages/ExploreStates/ExploreStates';
import StateDetail from './pages/StateDetail/StateDetail';
import PlaceDetail from './pages/PlaceDetail/PlaceDetail';
import Monuments from './pages/Monuments/Monuments';

// Culture
import CulturalPractices from './pages/CulturalPractices/CulturalPractices';
import Festivals from './pages/Festivals/Festivals';
import Architecture from './pages/Architecture/Architecture';
import TimelinePage from './pages/TimelinePage/TimelinePage';

// Interactive
import VirtualTour from './pages/VirtualTour/VirtualTour';
import Discussion from './pages/Discussion/Discussion';
import Feedback from './pages/Feedback/Feedback';

// Dashboards
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import EnthusiastDashboard from './pages/Dashboard/CulturalEnthusiast/EnthusiastDashboard';
import CreatorDashboard from './pages/Dashboard/ContentCreator/CreatorDashboard';
import GuideDashboard from './pages/Dashboard/TourGuide/GuideDashboard';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/home" element={<Home />} />

                        {/* Explore Routes */}
                        <Route path="/states" element={<ExploreStates />} />
                        <Route path="/states/:stateId" element={<StateDetails />} />
                        <Route path="/place/:placeId" element={<PlaceDetails />} />
                        <Route path="/monuments" element={<Monuments />} />

                        {/* Culture Routes */}
                        <Route path="/culture/practices" element={<CulturalPractices />} />
                        <Route path="/culture/festivals" element={<Festivals />} />
                        <Route path="/culture/architecture" element={<Architecture />} />
                        <Route path="/culture/timeline" element={<TimelinePage />} />

                        {/* Interactive */}
                        <Route path="/virtual-tour" element={<VirtualTour />} />
                        <Route path="/discussion" element={<Discussion />} />
                        <Route path="/feedback" element={<Feedback />} />

                        {/* Dashboards */}
                        <Route path="/dashboard/admin" element={<AdminDashboard />} />
                        <Route path="/dashboard/enthusiast" element={<EnthusiastDashboard />} />
                        <Route path="/dashboard/creator" element={<CreatorDashboard />} />
                        <Route path="/dashboard/guide" element={<GuideDashboard />} />

                        {/* Fallback */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
