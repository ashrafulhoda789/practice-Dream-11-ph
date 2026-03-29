import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Players from './components/homePage/players/Players'
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async() =>{
  const res = await fetch('/data.json')
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();
  return (
    <>
       <header>
        <Navbar></Navbar>
       </header>
      
      <main className='w-11/12 mx-auto'>
        <Banner></Banner>
        
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Players playerPromise={playerPromise}></Players>
        </Suspense>
      </main>
    </>
  )
}

export default App
