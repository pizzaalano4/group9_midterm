import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="title">TV Show Explorer</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;