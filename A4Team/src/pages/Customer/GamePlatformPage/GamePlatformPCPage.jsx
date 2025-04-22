import { Box } from "@mui/material";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import GamePlatFormComponent from "./GamePlatformPageDetails/GamePlatformPage.component";


function GamePlatformPCPage () {
    return (
        <Box sx={{
            // margin: "-8px",
            bgcolor: "#272727"
        }}>
            {/* <Header /> */}

            <GamePlatFormComponent plafformName={"PC"}/>

            {/* <Footer /> */}
        </Box>
    )
}

export default GamePlatformPCPage;