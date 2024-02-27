import './App.css'
import LandingPage from './Pages/LandingPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Tracker from './Pages/Tracker'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { TokenAuthContext } from './Contexts/TokenContext'




function App() {
const {isAuthorised, setIsAuthorised}=useContext(TokenAuthContext)
  return (
    <>
    
    <Routes>
      <Route path='/' element={<LandingPage insideLandingPage></LandingPage>}> </Route>
      <Route path='/login' element={<LandingPage insideLogin></LandingPage>} > </Route>
      <Route path='/register' element={<LandingPage></LandingPage>} > </Route>
      <Route path='/tracker' element={isAuthorised?<Tracker></Tracker>:<LandingPage insideLandingPage></LandingPage>}> </Route>
      <Route path='/*' element={<Navigate to={'/'}></Navigate>}>  </Route>
      

     </Routes>
     <Footer></Footer>
     
     
    </>
  )
}

export default App
