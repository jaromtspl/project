import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import Herosectionend from './components/Herosectionend'
import LandingPage from './components/Landingpage'
import Nav from './components/Nav'
import Contactpage from './components/Contactpage'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Whatsapp from './components/Whatsapp'



function App() {


  return (
    <div name="home">

      <Navbar />
      <div className='bg-hero h-[700px] bg-no-repeat bg-cover'>
        <div className='pt-10'>
          <Nav />
          <LandingPage />
          <Herosection />
          <Herosectionend />
          <AboutUs/>
          <Contactpage />
          <Footer />
          <Whatsapp/>
        </div>
      </div>

    </div>
  )
}

export default App
