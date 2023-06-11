// import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import BoxResult from './components/Box'
import { useState } from 'react';

function App() {

  const [searchClicked, setSearchClicked] = useState(false);
  const [cityName,setCityName]=useState("");

  const setValue=(city)=>{
    // console.log(city)
    setCityName(city);
    setSearchClicked(true);
  }

  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className='heading'>Weather Api by <strong>@Harsh5</strong></h1>
        <Search setValue={setValue} />
      </div>
      
      {searchClicked && <BoxResult  CityName={cityName} />}
    </div>
  );
}

export default App;
