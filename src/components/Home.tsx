import Navbar from '../components/Home/Navbar'
import HomePage from '../components/Home/HomePage'
import Focus from '../components/Focus/Focus'
import Process from './Process/Process'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HomePage/>
        <About/>
        <Focus/>
        <Process/>
    </>
  )
}

export default Home