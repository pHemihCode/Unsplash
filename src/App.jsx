import React from 'react'
import { useState, useEffect } from 'react';
import { CiDark, CiBrightnessDown } from "react-icons/ci";

function App() {
  const [theme, setTheme] = useState(false);
  const [pictures, setPictures] = useState([])
  const [search, setSearch] = useState('dog');

  const fetchApi = async() => {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${search}&per_page=9&client_id=e_c9AW8gytL71U75DaCCh7adNq0d9SCFPMoJjqomYAU`);
    const data = await res.json();
    setPictures(data.results);
  }
 useEffect(()=>{
     fetchApi()
 },[])
  return (
    <section className={theme ? 'the-body h-screen px-5 lg:px-24' :'bg-white h-full px-5 lg:px-24'}>
      <div className="the-box relative the-cont">
       <div className='icons text-end'>
          {
            theme ? <button onClick={() => setTheme(!theme)}><CiBrightnessDown className='iconA'/></button> :  <button onClick={() => setTheme(!theme)}><CiDark className='iconB' /></button>
          }
          </div>
        <div className="input text-justify sm:text-center">
          <h1 className='text-3xl text-center text-blue-800 font-semibold m-5 sm:text-5xl'>Unsplash Images</h1>
          <div className="input-btn">
          <input type="search" value={search} className={theme ? 'border-2 w-3/4 lg:w-1/2 p-1 outline-0 bg-transparent text-white' : 'border-2 w-3/4 lg:w-1/2 p-1 outline-0 bg-transparent text-black'} onChange={(e) => setSearch(e.target.value)}/>
          <button className='bg-blue-800 w-1/4 lg:w-20 text-white px-4 py-1.5' onClick ={fetchApi}>Search</button>
          </div>
          </div> 
          <div className='grid grid-cols-1 gap-4 mt-10 the-image-cont w-full sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6'>
            {
              pictures.map((picture) => {
                return (
                  <div key={picture.id} className=''>
                    <img src= {picture.urls.raw}  alt={search} className='h-60 object-cover w-full the-image'/>   
                  </div>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default App