import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Sidebar />
          <Content />
        </Router>
      </div>

    </div>
  );
}

export default App;
