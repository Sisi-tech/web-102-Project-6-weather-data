import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import FetchData from './component/FetchData';
import Header from './component/Header';



function App() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(null);
  const [city, setCity] = useState(null);
  
  return (
    <div className='min-h-screen min-w-full bg-[url("/src/assets/sky.jpg")] bg-cover'>
      <BrowserRouter>
        <div className='flex flex-row justify-start'>
          <Header search={search} setSearch={setSearch} />
          <Routes>
            <Route path='/' element={<FetchData search={search} setSearch={setSearch} list={list} setList={setList} city={city} setCity={setCity} />} />
            <Route path='/search' element={<FetchData search={search} setSearch={setSearch} list={list} city={city} setList={setList} setCity={setCity} />} />
            <Route path='/about' element={<About city={city} list={list} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
