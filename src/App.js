import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import './App.css';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <div className="Bookstore-Container">
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<Books />} />
            <Route path="books" element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
