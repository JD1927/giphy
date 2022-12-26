import { Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';

const App = () => {

  const value = {
    name: 'jd1927',
    subscribe: true
  };
  return (
    <StaticContext.Provider value={value}>
      <div className="App">
        <section className="App-content">
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </section>
      </div>
    </StaticContext.Provider>
  );
};

export default App;
