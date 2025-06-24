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
import HCF from './pages/HCF'
import SumOfMatrixElements from './pages/SumOfMatrixElements'
import SumOfDigitsUntilSingleDigit from './pages/SumOfDigitsUntilSingleDigit'
import RightAngledTriangle from './pages/RightAngledTriangle'
import LeftAngledTriangle from './pages/LeftAngledTriangle'
import SwapRowsInMatrix from './pages/SwapRowsInMatrix'
import MissingNumberInArray from './pages/MissingNumberInArray'

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
        <Route path="/hcf" element={<HCF />} />
        <Route path="/sumofmatrix" element={<SumOfMatrixElements />} />
        <Route path="/sumofdigitsuntilsingledigit" element={<SumOfDigitsUntilSingleDigit />} />
        <Route path="/rightangledtrianglepattern" element={<RightAngledTriangle />} />
        <Route path="/leftangledtrianglepattern" element={<LeftAngledTriangle />} />
        <Route path="/swaprowsinmatrix" element={<SwapRowsInMatrix />} />
        <Route path="/findingmissingnumberinarray" element={<MissingNumberInArray />} />
      </Routes>
    </>
  )
}

export default App
