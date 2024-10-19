import Navbar from './component/Home/Navbar'
import HomePage from './component/Home/HomePage'
import Focus from './component/Focus/Focus'
import Process from './component/Process/Process'

const App = () => {
  return (
    <main className='font-poppins'>
      <Navbar/>
      <HomePage/>
      <Focus/>
      <Process/>
    </main>
  )
}

export default App