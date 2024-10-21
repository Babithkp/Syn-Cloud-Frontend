import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Sign_in from "./component/Sign_In_Sign_Up/Sign_in"

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route 
          element={<Home/>}
          path="/"
          />

          <Route
          element={<Sign_in/>}
          path="/sign_in"
          />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App