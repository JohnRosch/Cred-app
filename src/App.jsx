// import './App.css'
import { BrowserRouter as Router, Link, Routes, Route,} from "react-router-dom";
import Showlist from './components/Showlist'
import Create from './components/Create'
import Navbar from "./components/Navbar";
import 'semantic-ui-css/semantic.min.css'

function App() {
  
  return (
    <div className="App">
      
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element= {<Create />} />
            <Route path='/Showlist' element= {<Showlist />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App
