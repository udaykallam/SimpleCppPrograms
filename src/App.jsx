import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './components/Index'
import Palindrome from './pages/Palindrome'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/palindrome' element={<Palindrome />} />
      </Routes>
    </>
  )
}

export default App
