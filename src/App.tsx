import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./component/Home"
import Sign_in from "./component/Sign_In_Sign_Up/Sign_in"
import Sign_up from "./component/Sign_In_Sign_Up/Sign_up"
import Connect_aws from "./component/Sign_In_Sign_Up/Connect_aws"
import Prompt from "./component/PlayGround/Prompt"

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

          <Route
          element={<Sign_up/>}
          path="/sign_up"
          />

          <Route
          element={<Connect_aws/>}
          path="/connect_aws"
          />

        <Route
          element={<Prompt/>}
          path="/prompt"
        />

        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App