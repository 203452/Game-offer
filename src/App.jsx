import Login from './components/Login'
import Registro from './components/Registro'
import Principal from './components/Principal'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='registro' element={<Registro/>}/>
          <Route path='principal' element={<Principal/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
