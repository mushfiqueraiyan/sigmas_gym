import './App.css'
import Hero from './components/HeroSection/Hero'
import Pricing from './components/Pricing/Pricing'
import Programs from './components/Programs/Programs'
import Reason from './components/Reasons/Reason'

function App() {
  

  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reason/>
        <Pricing/>
    </div>
     
    
  )
}

export default App
