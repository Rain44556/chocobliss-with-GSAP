import './App.css'
import About from './components/About'
import BottomSection from './components/BottomSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import useAnimation from './hooks/useAnimation'
function App() {
  useAnimation();

  return (
    <>
<div id="main">
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<BottomSection></BottomSection>
</div>
    </>
  )
}

export default App
