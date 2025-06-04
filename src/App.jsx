import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './components/Index'
import Palindrome from './pages/Palindrome'
import { StringPalindrome } from './pages/StringPalindrome'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/palindrome' element={<Palindrome />} />
        <Route path='/stringpalindrome' element={<StringPalindrome />} />
      </Routes>
    </>
  )
}

export default App
