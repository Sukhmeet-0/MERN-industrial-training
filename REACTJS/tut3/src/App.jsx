import { useState } from 'react'
import './App.css'
import CreateAccount from './pages/CreateAccount'
import SignIn from './pages/SignIn'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateAccount/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
