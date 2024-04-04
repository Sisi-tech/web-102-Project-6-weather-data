import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import FetchData from './component/FetchData';
import Header from './component/Header';



function App() {
  const [search, setSearch] = useState("");
  

  return (
    <div className='min-h-screen min-w-full bg-[url("/src/assets/sky.jpg")] bg-cover'>
      <BrowserRouter>
        <div className='flex flex-row justify-start'>
          <Header search={search} setSearch={setSearch} />
          <Routes>
            <Route path='/' element={<FetchData search={search} setSearch={setSearch} />} />
            <Route path='/search' element={<FetchData search={search} setSearch={setSearch} />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
