import { Box } from "@mui/material";
import Header from "../../../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../layouts/Footer";


function GamePlatform () {
    return (
        <Box sx={{
            bgcolor: "#272727",
            margin: '-8px'
        }}>
            <Header />

            <Outlet />

            <Footer />
        </Box>
    )
}

export default GamePlatform;