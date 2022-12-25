import { Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  );
}

export default App;
