import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Hero from './pages/Hero'
import Login from './pages/auth/Login'
import Signup from './pages/auth/SignUp'
import Dashboard from './pages/Dashboard'
import Classes from './pages/Classes'
import Settings from './pages/Settings'
import Attendance from './pages/Attendance'
import DashboardLayout from './layout/DashboardLayout'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
      </Routes>

    </BrowserRouter>
  )
}


export default App
