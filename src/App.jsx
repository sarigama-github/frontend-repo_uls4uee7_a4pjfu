import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { AboutSection, StagesGrid, ContactCTA } from './components/Sections'
import { AboutPage, StagesPage, AdmissionsPage, GalleryPage, NewsPage, ContactPage } from './pages/StaticPages'

function Home(){
  return (
    <main>
      <Hero/>
      <AboutSection/>
      <StagesGrid/>
      <ContactCTA/>
    </main>
  )
}

export default function App(){
  const location = useLocation()
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Routes location={location}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/stages" element={<StagesPage/>} />
        <Route path="/admissions" element={<AdmissionsPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
