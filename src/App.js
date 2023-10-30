import { useEffect, useState } from 'react';
import "./App.css"

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40376691-737edde700b3d297470e6271a&q=${search}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then(d => setData(d.hits));
  }, [search]);

  return (
    <div className='App'>
      <div className='nav'>
      
        <a href="https://pixabay.com/">Pixabay</a>
        <select>
          <option value=''>Explore</option>
        </select>
        <i className='fa-solid fa-bell'></i>
        <div className='upload-container'>
          <h4>📌Upload</h4>
        </div>
      </div>
      <div className='name'>
        <div className='name-content'>
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <h4>Over 4.2 million+ high quality stock images, videos, and music shared by our talented community.</h4>
        </div>
        <div className='search-bar'>
  <input type='text' onChange={(e) => setSearch(e.target.value)} placeholder='Search for all images on pixabay' />
  <select className='select-right'>
    <option value=''>All Images</option>
  </select>
</div>

      </div>
      {data.map((x) => {
        return (
          <section key={x.id} className='secimg'>
            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth} alt='Pixabay' />
          </section>
        );
      })}
      
    </div>
  );
};

export default App