import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import StoreHome from './pages/StoreHome';

// Temporary Page Components (We will replace these with your designs)
const Home = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
    <h1 className="text-2xl font-bold">Home Page Content will go here</h1>
  </div>
);

const Admin = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
    <h1 className="text-2xl font-bold">Admin Dashboard will go here</h1>
  </div>
);

function App() {
  return (
    <Router>
      {/* This div ensures the footer stays at the bottom 
        even if the page content is short (min-h-screen)
      */}
      <div className="flex flex-col min-h-screen">
        
        {/* Navbar stays at the top of all pages */}
        <Navbar />
        {/* This main tag grows to push the footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<StoreHome />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom of all pages */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;