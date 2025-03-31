import { Suspense } from 'react';
import Banner from './components/Banner';
import HouseList from './components/HouseList';
import "./app.css"

function App() {
  return (
    <>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList />
      </Suspense>
    </>
  );
}

export default App
