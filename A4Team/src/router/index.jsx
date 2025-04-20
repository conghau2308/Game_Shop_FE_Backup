import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/Customer/LoginPage/LoginPage"
import HomePage from "../pages/Customer/HomePage/HomePage"
import Trending from "../pages/Customer/HomePage/HomePageDetails/Trending"
import ActionFooter from "../pages/Customer/HomePage/HomePageDetails/ActionFooter"
import Categories from "../pages/Customer/HomePage/HomePageDetails/Categories"
import Content from "../pages/Customer/HomePage/HomePageDetails/Content"
import FAQs from "../pages/Customer/HomePage/HomePageDetails/FAQs"
import Information from "../pages/Customer/HomePage/HomePageDetails/Information"
import TopBanner from "../pages/Customer/HomePage/HomePageDetails/TopBanner"
import Indies from "../pages/Customer/HomePage/HomePageDetails/Indies"
import Review from "../pages/Customer/HomePage/HomePageDetails/Review"
import Newss from "../pages/Customer/HomePage/HomePageDetails/News"
import SignUpPage from "../pages/Customer/SignUpPage/SignupPage"
import ProductDetailPage from "../pages/Customer/ProductDetail/ProductDetail"
import ProductCartPage from "../pages/Customer/CartPage/ProductCart/ProductCartPage"
import SummaryPayment from "../components/Customer/CartPage/PaymentPage/SummaryPayment"
import SelectMethod from "../pages/Customer/CartPage/PaymentPage/PaymentMethod/SelectMethod"
import GameActivationPage from "../pages/Customer/CartPage/GameActivationPage/GameActivationPage"
import UserPage from "../components/Customer/UserPage/UserPage"
import MyOrdersPage from "../pages/Customer/UserPage/MyOrdersPage/MyOrdersPage"
import MyReviewsPage from "../pages/Customer/UserPage/MyReviewsPage/MyReviewsPage"
import SettingsPage from "../components/Customer/UserPage/SettingsPage/SettingsPage"
import SecurityPage from "../pages/Customer/UserPage/SettingsPage/SecurityPage/SecurityPage"
import AvatarPage from "../pages/Customer/UserPage/SettingsPage/AvatarPage/AvatarPage"
import CheckPayment from "../pages/Customer/CartPage/PaymentPage/CheckPayment/CheckPayment"
import PaymentFailure from "../pages/Customer/CartPage/PaymentPage/PaymentStatus/PaymentFailure"
import GamePlatformPCPage from "../pages/Customer/GamePlatformPage/GamePlatformPCPage"
import GamePlatformPlayStationPage from "../pages/Customer/GamePlatformPage/GamePlatformPlayStationPage"
import GamePlatformXboxPage from "../pages/Customer/GamePlatformPage/GamePlatformXboxPage"
import GamePlatformNintendoPage from "../pages/Customer/GamePlatformPage/GamePlatformNintendoPage"


const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/homepage" replace />} />

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
            <Route path="/create-an-account" element={<SignUpPage />} />
            <Route path="/product-detail/buy/:id/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<ProductCartPage />} />

            <Route path="/make-payment" element={<SummaryPayment />}>
                {/* <Route path="select-bank" element={<SelectBankPage />}/>
          <Route path="fill-payment" element={<FillPayment />}/>
          <Route path="confirm-payment" element={<ConfirmPayment />} /> */}
                <Route path="select-method" element={<SelectMethod />} />
            </Route>

            <Route path="/game-activation" element={<GameActivationPage />} />
            <Route path="/user" element={<UserPage />}>
                <Route path="my-orders" element={<MyOrdersPage />} />
                <Route path="my-reviews" element={<MyReviewsPage />} />
                <Route path="settings" element={<SettingsPage />}>
                    <Route index element={<Navigate to="user-profile-settings-avatar" replace />} />
                    <Route path="user-profile-settings-security" element={<SecurityPage />} />
                    <Route path="user-profile-settings-avatar" element={<AvatarPage />} />
                </Route>
            </Route>

            <Route path="/checkPayment" element={<CheckPayment />} />
            <Route path="/payment-failed" element={<PaymentFailure />} />
            <Route path="/platform/platform=pc" element={<GamePlatformPCPage />} />
            <Route path="/platform/platform=playstation" element={<GamePlatformPlayStationPage />} />
            <Route path="/platform/platform=xbox" element={<GamePlatformXboxPage />} />
            <Route path="/platform/platform=nintendo" element={<GamePlatformNintendoPage />} />
        </Routes>
    )
}

export default RouteComponent;