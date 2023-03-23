// import './App.css'
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Showlist from './components/Showlist'
import Create from './components/Create'
import Draft from './components/Draft'
import 'semantic-ui-css/semantic.min.css'

function App() {
  
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path='/' element= {<Create />} />
            <Route path='/Showlist' element= {<Showlist />} />
            <Route path='/Draft' element= {<Draft />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App
