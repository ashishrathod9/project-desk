import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Issuedetails from './pages/Issuedetails/Issuedetails'
import Auth from './pages/Auth/Auth'

function App() {
  return (
    <>
    {false?
    <div>
    <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetails/>}/>
        <Route path='/project/:projectId/issue/:issueId' element={<Issuedetails/>}/>
      </Routes>
      </div>:<Auth/>
}

    </>
  )
}

export default App
