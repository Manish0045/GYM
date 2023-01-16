import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Contact from '../src/pages/contact/Contact'
import Gallery from '../src/pages/gallery/Gallery'
import Plans from '../src/pages/plans/Plans'
import Trainers from '../src/pages/trainers/Trainers'
import Notfound from '../src/pages/notFound/Notfound'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
