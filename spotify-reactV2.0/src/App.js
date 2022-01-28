import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './views/Homepage';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import AlbumPage from './views/AlbumPage';

function App() {
  return (
    <Router>
        <Route exact path='/' component={Homepage} />
        <Route path='/' component={Sidebar} />
        <Route path='/' component={Player} />
        <Route exact path='/album/:id' component={AlbumPage} />
    </Router>
  );
}

export default App;
