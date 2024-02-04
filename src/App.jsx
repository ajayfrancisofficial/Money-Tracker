import './App.css'
import LandingPage from './Pages/LandingPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Tracker from './Pages/Tracker'
import Footer from './Components/Footer'




function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<LandingPage insideLandingPage></LandingPage>}> </Route>
      <Route path='/login' element={<LandingPage insideLogin></LandingPage>} > </Route>
      <Route path='/register' element={<LandingPage></LandingPage>} > </Route>
      <Route path='/tracker' element={<Tracker></Tracker>}> </Route>
      <Route path='/*' element={<Navigate to={'/'}></Navigate>}>  </Route>
      

     </Routes>
     <Footer></Footer>
     
     
    </>
  )
}

export default App
