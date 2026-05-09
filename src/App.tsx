import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactPage } from './pages/Contact'
import { GalleryPage } from './pages/Gallery'
import { HomePage } from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="gallery/:categoryId" element={<GalleryPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
