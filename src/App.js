import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/firewords/page';
function App() {
  return (
     <div id='app'>
      <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
     
        </Routes>
      </Router>  
      </div>
  );
}


export default App;
