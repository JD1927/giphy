import { Link, Route } from 'wouter';
import './App.css';
import GifList from './components/GifList';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/SNK'>Shingeki No Kiojin Gifs</Link>
        <Link to='/gif/Blacklist'>The Blacklist Gifs</Link>
        <Link to='/gif/Suits'>Suits Gifs</Link>
        <Route path='/gif/:keyword' component={GifList}/>
      </section>
    </div>
  );
}

export default App;
