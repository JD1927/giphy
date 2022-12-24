import { useEffect, useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import { getGifs } from './services/getGifs';

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGifs = async () => {
      const requestedGifs = await getGifs({ keyword: 'programming' });
      setGifs([...requestedGifs]);
    }
    fetchGifs();
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((gif) => (
            <Gif
              key={gif.id}
              id={gif.id}
              title={gif.title}
              url={gif.url}
            />
          ))
        }
      </section>
    </div>
  );
}

export default App;
