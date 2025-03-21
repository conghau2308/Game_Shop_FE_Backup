import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import LoginPage from './pages/Customer/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Customer/HomePage/HomePage'
import SignUpPage from './pages/Customer/SignUpPage/SignupPage'
import ProductDetailPage from './pages/Customer/ProductDetail/ProductDetail'
import Trending from './pages/Customer/HomePage/HomePageDetails/Trending'
import Indies from './pages/Customer/HomePage/HomePageDetails/Indies'
import ActionFooter from './pages/Customer/HomePage/HomePageDetails/ActionFooter'
import Categories from './pages/Customer/HomePage/HomePageDetails/Categories'
import Comment from './pages/Customer/HomePage/HomePageDetails/Comment'
import Content from './pages/Customer/HomePage/HomePageDetails/Content'
import FAQs from './pages/Customer/HomePage/HomePageDetails/FAQs'
import Information from './pages/Customer/HomePage/HomePageDetails/Information'
import TopBanner from './pages/Customer/HomePage/HomePageDetails/TopBanner'
import Review from './pages/Customer/HomePage/HomePageDetails/Review'
import Newss from './pages/Customer/HomePage/HomePageDetails/News'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />}>
          <Route element={<Trending />} />
          <Route element={<ActionFooter />} />
          <Route element={<Categories />} />
          <Route element={<Comment />} />
          <Route element={<Content />} />
          <Route element={<FAQs />} />
          <Route element={<Information />} />
          <Route element={<TopBanner />} />
          <Route element={<Indies />} />
          <Route element={<Review />} />
          <Route element={<Newss />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product-detail/buy/:id/:slug" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
