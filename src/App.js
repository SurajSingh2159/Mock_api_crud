import Create from './Components/Create';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Read from './Components/Read';
import Update from './Components/Update';


function App() {
  return (
    <Router>
    <div className="container">
    <Routes>
    <Route exact path="/" element ={<Create />} />
    <Route exact path="/read" element ={<Read />} />
    <Route exact path="/update" element ={<Update />} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
