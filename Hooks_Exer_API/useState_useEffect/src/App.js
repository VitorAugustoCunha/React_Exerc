import './App.css';
import { useEffect, useState } from 'react';

function App() {

  function renderPosts(){
    return(
      <div className="card-container">
        {itens.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>{item.id}</p>
          </div>
        ))}
      </div>
    );
  }

  function renderComments(){
    return(
      <div className="card-container">
        {itens.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
            <p>{item.body}</p>
            <p>{item.id}</p>
          </div>
        ))}
      </div>
    );
  }
  

  function renderPhotos() {  
    return (
      <div className="card-container">
        {itens.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.url + `.png`} alt='img'/>
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  const [resourcesType, setResourcesType] = useState('posts');
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourcesType}`)
      const responseJSON  = await response.json()
      setItens(responseJSON)
      console.log(responseJSON)
    }
    fetchResourceTypes();
  }, [resourcesType]);

  const mudarResourcesType = (recourceType) => {
    setResourcesType(recourceType);
  }

  return (
    <div className="App">
      <h1>{resourcesType}</h1>
      <button onClick={() => mudarResourcesType('posts')}>Posts</button>
      <button onClick={() => mudarResourcesType('comments')}>Comments</button>
      <button onClick={() => mudarResourcesType('photos')}>Photos</button>
      <div>
        {String(resourcesType) === 'posts' && renderPosts()}
        {String(resourcesType) === 'comments' && renderComments()}
        {String(resourcesType) === 'photos' && renderPhotos()}
      </div>
    </div>
  );
}

export default App;
