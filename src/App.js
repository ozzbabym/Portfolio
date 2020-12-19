import { Route } from 'react-router-dom';
import './App.css';
import { AboutMe} from './components/AboutMe/AboutMe';
import { Header } from './components/Header/Header';
import { Projects } from './components/Projects/Projects';
import $ from 'jquery'





function App() {

  
  
  

  return (
    <div className="App">
      <Header />
      <div>
        <div>
          <Route exact path={'/about'} render={()=>(<AboutMe />)}/>
        </div>
        <div>
          <Route exact path='/projects' render={()=>(<Projects />)} />
        </div>
      </div>

    </div>
  );
}

export default App;
