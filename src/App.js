import { Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

const App = () => {

  const value = {
    name: 'jd1927',
    subscribe: true
  };
  return (
    <StaticContext.Provider value={value}>
      <div className="App">
      <h1 className='App-title'>GIPHY | JD1927</h1>
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={() => (
              <h1>404 ERROR :c</h1>
            )} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
};

export default App;
