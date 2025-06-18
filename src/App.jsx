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
import ReverseNumber from './pages/ReverseNumber'
import Anagram from './pages/Anagram'
import LCM from './pages/LCM'

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
        <Route path="/reverse" element={<ReverseNumber />} />
        <Route path="/anagram" element={<Anagram />} />
        <Route path="/lcm" element={<LCM />} />
      </Routes>
    </>
  )
}

export default App
