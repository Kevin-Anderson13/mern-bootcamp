import './App.css';
import { Router } from '@reach/router';
import Main from './component/Main';
import UpdateAuthor from './component/UpdateAuthor';
import Create from './component/Create';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <UpdateAuthor path="/authors/edit/:id" />
      </Router>

    </div>
  );
}

export default App;