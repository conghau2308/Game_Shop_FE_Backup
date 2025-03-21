import { Box, useMediaQuery } from "@mui/material";
import TopProductDetail from "./ProductDetails/TopProductDetail";
import AboutProduct from "./ProductDetails/AboutProduct";
import Newss from "../HomePage/HomePageDetails/News";
import CommentProduct from "./ProductDetails/CommentProduct";
import ReviewProduct from "./ProductDetails/ReviewsProduct";
import UserReviews from "./ProductDetails/UserReviews";
import ActionFooter from "../HomePage/HomePageDetails/ActionFooter";
import ReadMoreReviews from "./ProductDetails/ReadMoreReviews";


function ProductDetailComponent() {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box sx={{
            bgcolor: "#272727"
        }}>
            <TopProductDetail />

            <AboutProduct />

            <Newss />

            <CommentProduct />

            <ReviewProduct />

            <UserReviews />

            {!isMobile && (
                <ReadMoreReviews />
            )}

            <ActionFooter />
        </Box>
    )
}

export default ProductDetailComponent;