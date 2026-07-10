import Hero from './components/Hero'
import Catalogue from './components/Catalogue'
import Accessories from './components/Accessories'
import Packaging from './components/Packaging'
import BrandStory from './components/BrandStory'
import Moodboard from './components/Moodboard'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Moodboard />
      <Catalogue />
      <Accessories />
      <Packaging />
      <BrandStory />
      <Connect />
      <Footer />
    </>
  )
}
