
import Banner from './components/Banner';
import HouseList from './components/HouseList';
import "./app.css"
import { useState } from 'react';
import House from './components/House';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };

  return (
    <ErrorBoundary fallback="Something went wrong!">
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      {selectedHouse ? <House house={selectedHouse} />
        : <HouseList selectHouse={setSelectedHouseWrapper} />}
    </ErrorBoundary>
  );
}

export default App
