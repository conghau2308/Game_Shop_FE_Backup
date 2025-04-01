import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import HideOnScroll from "../CartPage/ProductCart/HideOnScroll";
import CartStepper from "./CartStepper";
import { useNavigate } from "react-router-dom";


function CartHeader({ activate }) {
    const isMobile = useMediaQuery("(max-width:600px)");
    const navigate = useNavigate();

    return (
        <AppBar sx={{ bgcolor: "#141414", position: "fixed" }}>
            {isMobile && (
                <HideOnScroll>
                    <Toolbar sx={{ justifyContent: "center" }}>
                        <Box
                            component="img"
                            src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
                            sx={{
                                width: "100px",
                                height: "auto",
                                objectFit: "cover",
                            }}
                            onClick={() => navigate("/homepage")}
                        />
                    </Toolbar>
                </HideOnScroll>
            )}

            <Toolbar>
                <CartStepper activeStep={activate} />
            </Toolbar>
        </AppBar>
    )
}

export default CartHeader;