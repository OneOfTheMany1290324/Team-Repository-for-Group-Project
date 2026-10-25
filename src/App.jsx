import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import './App.css';

export default function App() {
    return (
        
            <div className="app-shell">
                <Navbar />

                <main className="page-content" style={{ padding: '2rem' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
       
    );
}