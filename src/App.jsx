import Login from './components/Login'
import Registro from './components/Registro'
import Add from './components/Add'
import Compra from './components/Compra'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='registro' element={<Registro/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='compra' element={<Compra/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
