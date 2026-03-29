import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Players from './components/homePage/players/Players'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import { ToastContainer } from 'react-toastify'

const fetchPlayer = async () => {
  const res = await fetch('/data.json')
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();

  const [coin, setCoin] = useState(500000);
  return (
    <>
      <header>
        <Navbar coin={coin} setCoin={setCoin}></Navbar>
      </header>

      <main className='w-11/12 mx-auto'>
        <Banner></Banner>

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Players
            coin={coin} setCoin={setCoin}
            playerPromise={playerPromise}></Players>
        </Suspense>

        <ToastContainer></ToastContainer>
      </main>

      <footer>
       <Footer></Footer>
      </footer>
    </>
  )
}

export default App
