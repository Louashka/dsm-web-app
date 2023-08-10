import Layout from "./pages/Layout";
import Home from './pages/Home';
import Fabrication from './pages/Fabrication';
import FabTutorial from "./pages/FabTutorial";
import Downloads from './pages/Downloads';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fabrication" element={<Fabrication />} />
          <Route path="fabrication/:id" element={<FabTutorial />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
