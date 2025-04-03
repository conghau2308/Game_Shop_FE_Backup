import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import LoginPage from './pages/Customer/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
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
import ProductCartPage from './pages/Customer/CartPage/ProductCart/ProductCartPage'
import SummaryPayment from './components/Customer/CartPage/PaymentPage/SummaryPayment'
import SelectBankPage from './pages/Customer/CartPage/PaymentPage/SelectBankPage/SelectBankPage'
import FillPayment from './pages/Customer/CartPage/PaymentPage/PaymentPage/FillPayment'
import ConfirmPayment from './pages/Customer/CartPage/PaymentPage/ConfirmPayment/ConfirmPayment'
import GameActivationPage from './pages/Customer/CartPage/GameActivationPage/GameActivationPage'
import UserPage from './components/Customer/UserPage/UserPage'
import MyOrdersPage from './pages/Customer/UserPage/MyOrdersPage/MyOrdersPage'
import MyReviewsPage from './pages/Customer/UserPage/MyReviewsPage/MyReviewsPage'
import SettingsPage from './components/Customer/UserPage/SettingsPage/SettingsPage'
import SecurityPage from './pages/Customer/UserPage/SettingsPage/SecurityPage/SecurityPage'
import AvatarPage from './pages/Customer/UserPage/SettingsPage/AvatarPage/AvatarPage'
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
        <Route path="/cart" element={<ProductCartPage />} />

        <Route path="/make-payment" element={<SummaryPayment />}>
          <Route path="select-bank" element={<SelectBankPage />}/>
          <Route path="fill-payment" element={<FillPayment />}/>
          <Route path="confirm-payment" element={<ConfirmPayment />} />
        </Route>

        <Route path="/game-activation" element={<GameActivationPage />} />
        <Route path="/user" element={<UserPage />}>
          <Route path="my-orders" element={<MyOrdersPage />} />
          <Route path="my-reviews" element={<MyReviewsPage />} />
          <Route path="settings" element={<SettingsPage />}>
            <Route index element={<Navigate to="user-profile-settings-avatar" replace/>} />
            <Route path="user-profile-settings-security" element={<SecurityPage />} />
            <Route path="user-profile-settings-avatar" element={<AvatarPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
