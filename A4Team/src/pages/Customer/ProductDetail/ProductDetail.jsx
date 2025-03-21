import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";
import ProductDetailComponent from "./ProductDetail.component";
import { Box } from "@mui/material";

function ProductDetailPage() {
    return (
        <Box sx={{
            margin: "-8px"
        }}>
            <Header />
            
            <ProductDetailComponent />

            <Footer />
        </Box>
    )
}

export default ProductDetailPage;