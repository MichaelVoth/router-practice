
import './App.css';
import {BrowserRouter,
Routes,
Route}
from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:word" element={<Word/>}/>
        <Route path="/:word/:color" element={<Word/>}/>
        <Route path="/:word/:color/:bgcolor" element={<Word/>}/>
      </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
