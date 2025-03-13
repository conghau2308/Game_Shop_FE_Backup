import { Container, Box } from "@mui/material";
import HomePageComponent from "./HomePage.component";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";


function HomePage() {
    return (
        <Box sx={{
            bgcolor: "#272727",
            margin: "-8px"
        }}>
            <Header />
            <HomePageComponent />
            <Footer />
        </Box>
    )
}

export default HomePage;