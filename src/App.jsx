import routes from './routes'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import Background from './components/Background'

function App() {

  return (
    <div className="relative w-[100%] bg-white font-myCustomFont">
      <Navbar/>
      <Background/>
      <Routes>
        {routes.map(({path, Component}, idx)=><Route path={path} element={<Component/>} key={idx}/>)}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
