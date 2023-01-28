import { useState } from 'react';
import Header from './components/Header';
import ImageResult from './components/ImageResult';

function App() {
  const [listImages, setListImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className='app'>
      <Header
        setListImages={setListImages}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
      />
      <ImageResult listImages={listImages} isLoading={isLoading} />
    </main>
  );
}

export default App;
