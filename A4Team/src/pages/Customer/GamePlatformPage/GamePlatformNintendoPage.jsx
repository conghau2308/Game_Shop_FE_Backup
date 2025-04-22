import { Box } from "@mui/material";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import GamePlatFormComponent from "./GamePlatformPageDetails/GamePlatformPage.component";


function GamePlatformNintendoPage () {
    return (
        <Box sx={{
            // margin: "-8px",
            bgcolor: "#272727"
        }}>
            {/* <Header /> */}

            <GamePlatFormComponent plafformName={"Nintendo"}/>

            {/* <Footer /> */}
        </Box>
    )
}

export default GamePlatformNintendoPage;