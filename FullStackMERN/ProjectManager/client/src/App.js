import './App.css';
import { Router } from '@reach/router';
import Main from './view/Main';
import ShowOne from './view/ShowOne';
import Update from './view/Update';




function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ShowOne path="/product/:id" />
        <Update path="/product/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
