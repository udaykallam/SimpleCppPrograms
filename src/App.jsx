import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './components/Index'
import Palindrome from './pages/Palindrome'
import { StringPalindrome } from './pages/StringPalindrome'
import PrimeNumber from './pages/PrimeNumber'
import Factorial from './pages/Factorial'
import Fibonacci from './pages/Fibonacci'
import OddEven from './pages/OddEven'
import Armstrong from './pages/Armstrong'
import PerfectNumber from './pages/PerfectNumber'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
        <Route path='/palindrome' element={<Palindrome />} />
        <Route path='/stringpalindrome' element={<StringPalindrome />} />
        <Route path='/primenumber' element={<PrimeNumber />} />
        <Route path='/factorial' element={<Factorial />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/evenodd" element={<OddEven />} />
        <Route path="/armstrong" element={<Armstrong />} />
        <Route path="/perfect" element={<PerfectNumber />} />
      </Routes>
    </>
  )
}

export default App
