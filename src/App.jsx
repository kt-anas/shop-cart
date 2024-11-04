 
 
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Home from './pages/home'
import Details from './pages/detail'

function App() {
  

  return (
    <BrowserRouter>
     <Routes >
         <Route path="/" element={<Layout />}/>
         <Route index element={<Home />}/>
         <Route path='/:id' element={<Details/>}/>
     </Routes>


    </BrowserRouter>
  )
}

export default App
