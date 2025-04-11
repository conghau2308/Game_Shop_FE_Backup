import { Telegram } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useAuthStore } from "../../../../hooks/User";


function ActionFooter() {
    const { isLogin } = useAuthStore();

    return (
        <Box sx={{
            display: isLogin ? "none" : "flex",
            flexDirection: "column",
            justifySelf: "center",
            textAlign: "center",
            bgcolor: "#323232",
            width: "100%",
            padding: {xs: "20px 0 20px 0", sm: "30px 0 30px 0"}
        }}>
            <Box>
                <Telegram sx={{
                    height: {xs: 35, sm: 50},
                    width: {xs: 35, sm: 50},
                    color: "#ff5400"
                }} />
            </Box>

            <Typography sx={{
                color: "white",
                fontSize: {xs: 15, sm: 20},
                fontFamily: "barlow-regular"
            }}>
                Don't miss any offers and promotions!
            </Typography>

            <Typography sx={{
                color: "#999",
                fontSize: {xs: 12, sm: 15},
                fontFamily: "barlow",
                fontWeight: 600,
                paddingBottom: 2,
                paddingLeft: 2,
                paddingRight: 2
            }}>
                And be the first to receive our private offers, newsletters and deals of the week
            </Typography>

            <Box>
                <Button sx={{
                    textTransform: "none",
                    bgcolor: "#ff5400",
                    color: "white",
                    width: {xs: 90, sm: 110},
                    fontSize: {xs: 15, sm: 18},
                    fontFamily: "barlow-regular",
                    height: 50
                }}>
                    Sign up!
                </Button>
            </Box>
        </Box>
    )
}

export default ActionFooter;