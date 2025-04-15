import { Box, useMediaQuery } from "@mui/material";
import TopProductDetail from "./ProductDetails/TopProductDetail";
import AboutProduct from "./ProductDetails/AboutProduct";
import Newss from "../HomePage/HomePageDetails/News";
import CommentProduct from "./ProductDetails/CommentProduct";
import ReviewProduct from "./ProductDetails/ReviewsProduct";
import UserReviews from "./ProductDetails/UserReviews";
import ActionFooter from "../HomePage/HomePageDetails/ActionFooter";
import ReadMoreReviews from "./ProductDetails/ReadMoreReviews";
import { GameProvider } from "../../../contexts/GameContext";
import { useParams } from "react-router-dom";


function ProductDetailComponent() {
    const isMobile = useMediaQuery("(max-width:600px)");

    const { id } = useParams();

    return (
        <Box sx={{
            bgcolor: "#272727"
        }}>
            <TopProductDetail />

            <GameProvider gameId={id}>
                <AboutProduct />
            </GameProvider>

            <Newss />

            <CommentProduct />

            <GameProvider gameId={id}>
                <ReviewProduct />
            </GameProvider>

            <UserReviews />

            {!isMobile && (
                <ReadMoreReviews />
            )}

            <ActionFooter />
        </Box>
    )
}

export default ProductDetailComponent;