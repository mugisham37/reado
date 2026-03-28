import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks'
import { Navigation } from './components/layout/Navigation'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Subscribe from './pages/Subscribe'
import About from './pages/About'
import {
  Podcast,
  PodcastPost,
  VideoBlog,
  Categories,
  CategoryPosts,
  Authors,
  AuthorProfile,
  LegalPage,
  NotFound,
} from './pages/OtherPages'

export default function App() {
  const location = useLocation()

  // Global smooth scrolling (Lenis, intensity 10)
  useLenis()

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/podcast/:slug" element={<PodcastPost />} />
            <Route path="/video-blog" element={<VideoBlog />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:slug" element={<CategoryPosts />} />
            <Route path="/author" element={<Authors />} />
            <Route path="/author/:slug" element={<AuthorProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal-pages/:slug" element={<LegalPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
