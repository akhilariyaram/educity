
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/navbar/Navbar'
import Programs from "./components/Programs/Programs"
import Testimonials from './components/Testiminials/Testimonials'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      
      <div className="container">
      <Title subtitle='Our Program' title='What We Offer'/>
      <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Student Says?'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App