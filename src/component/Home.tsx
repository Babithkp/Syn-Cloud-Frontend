import Navbar from '../component/Home/Navbar'
import HomePage from '../component/Home/HomePage'
import Focus from '../component/Focus/Focus'
import Process from '../component/Process/Process'
import About from '../component/About/About'

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