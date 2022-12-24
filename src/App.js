import { useState } from 'react';
import './App.css';
import GifList from './components/GifList';

const App = () => {

  const [keyword, setKeyword] = useState('rick and morty');
  return (
    <div className="App">
      <section className="App-content">
        <button
          onClick={() => setKeyword('colombia')}>
            Change keyword
        </button>
        <GifList keyword={keyword}/>
      </section>
    </div>
  );
}

export default App;
