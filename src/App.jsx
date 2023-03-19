import routes from './routes'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="w-[100%] bg-white font font-myCustomFont">
      <Navbar/>
      <Routes>
        {routes.map(({path, Component}, idx)=><Route path={path} element={<Component/>} key={idx}/>)}
      </Routes>
    </div>
  )
}

export default App
