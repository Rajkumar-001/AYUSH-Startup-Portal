import Features from '@/components/LandingPage/Features/Features'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import HeroSection from '@/components/LandingPage/HeroSection/HeroSection'
import Testimonial from '@/components/LandingPage/Testimonial/Testimonial'
import CTA from '@/components/LandingPage/CTA/CTA'
// import Footer from '@/components/LandingPage/Footer/Footer'
function Main() {
  return (
    <div className='w-full'>
      <Navbar/>
      <HeroSection />
      <Features />
      <Testimonial />
      <CTA />
      {/* <Footer /> */}
      <Footer></Footer>

    </div>
  )
}

export default Main
