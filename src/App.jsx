import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute';

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
import Profile from './pages/Profile/Profile';

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

                        {/*PUBLIC */}
                        <Route path="/" element={<Landing />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* PROTECTED */}
                        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />

                        <Route path="/states" element={<PrivateRoute><ExploreStates /></PrivateRoute>} />
                        <Route path="/states/:stateId" element={<PrivateRoute><StateDetail /></PrivateRoute>} />
                        <Route path="/place/:placeId" element={<PrivateRoute><PlaceDetail /></PrivateRoute>} />
                        <Route path="/monuments" element={<PrivateRoute><Monuments /></PrivateRoute>} />

                        <Route path="/culture/practices" element={<PrivateRoute><CulturalPractices /></PrivateRoute>} />
                        <Route path="/culture/festivals" element={<PrivateRoute><Festivals /></PrivateRoute>} />
                        <Route path="/culture/architecture" element={<PrivateRoute><Architecture /></PrivateRoute>} />
                        <Route path="/culture/timeline" element={<PrivateRoute><TimelinePage /></PrivateRoute>} />

                        <Route path="/virtual-tour" element={<PrivateRoute><VirtualTour /></PrivateRoute>} />
                        <Route path="/discussion" element={<PrivateRoute><Discussion /></PrivateRoute>} />
                        <Route path="/feedback" element={<PrivateRoute><Feedback /></PrivateRoute>} />

                        <Route path="/dashboard/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                        <Route path="/dashboard/enthusiast" element={<PrivateRoute><EnthusiastDashboard /></PrivateRoute>} />
                        <Route path="/dashboard/creator" element={<PrivateRoute><CreatorDashboard /></PrivateRoute>} />
                        <Route path="/dashboard/guide" element={<PrivateRoute><GuideDashboard /></PrivateRoute>} />

                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

                        
                        <Route path="*" element={<Navigate to="/" replace />} />

                        
    
        
    


                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;