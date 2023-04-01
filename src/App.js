
import './App.css';
import Sidebar from './components/sidebar';
import Login from './components/login/login.js'
import MapFinland from './components/Map/MapFinland';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MapFinland/>
      </header>
    </div>
  );
}

export default App;
