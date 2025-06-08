import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './components/Index'
import Palindrome from './pages/Palindrome'
import { StringPalindrome } from './pages/StringPalindrome'
import PrimeNumber from './pages/PrimeNumber'
import Factorial from './pages/Factorial'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/palindrome' element={<Palindrome />} />
        <Route path='/stringpalindrome' element={<StringPalindrome />} />
        <Route path='/primenumber' element={<PrimeNumber />} />
        <Route path='/factorial' element={<Factorial />} />
      </Routes>
    </>
  )
}

export default App
