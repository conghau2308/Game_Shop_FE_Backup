import { Box, Grid2, useMediaQuery } from "@mui/material";
import Cart from "./ProductCartDetails/Cart";
import Summary from "./ProductCartDetails/Summary";
import { useEffect, useRef, useState } from "react";
import Recommend from "./ProductCartDetails/Recommend";
import CartHeader from "../../../../components/Customer/CartPage/CartHeader";
import CartFooter from "../../../../components/Customer/CartPage/CartFooter";


function ProductCartPage() {
    const [activeStep, setActiveStep] = useState(0);

    const isMobile = useMediaQuery("(max-width:600px)");

    const containerRef = useRef(null)
    const summaryRef = useRef(null)
    const [fixed, setFixed] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !summaryRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();

            if (containerRect.bottom <= window.innerHeight) {
                setFixed(false)
            }
            else {
                setFixed(true)
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        }
    }, [])


    return (
        <Box sx={{
            margin: "-8px",
            bgcolor: "#272727",
            position: "relative",
            overflow: 'auto',
            minHeight: "100vh"
        }}>
            <CartHeader activate={activeStep} />

            {isMobile ? (
                <Box>
                    <Box
                        ref={containerRef}
                        sx={{
                            position: "relative",
                            pb: 20
                        }}
                    >
                        <Grid2 container>
                            <Grid2 size={12} sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingTop: 20
                            }}>
                                <Cart />
                            </Grid2>

                            <Grid2 size={12} sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingTop: 6,
                                paddingBottom: 15
                            }}>
                                <Recommend />
                            </Grid2>

                            <Grid2 size={12}>
                                <Box
                                    ref={summaryRef}
                                    sx={{
                                        position: fixed ? "fixed" : "absolute",
                                        bottom: 0,
                                        right: 0,
                                        width: "100%",
                                        zIndex: 1000,
                                        transition: "all 0.3s linear"
                                    }}
                                >
                                    <Summary activate={setActiveStep} />
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Box>
                    
                    <CartFooter />
                </Box>
            ) : (
                <Box>
                    <Box>
                        <Grid2 container spacing={{ sm: 2, md: 3, lg: 3 }} sx={{
                            paddingTop: 15
                        }}>
                            <Grid2 size={7.5} sx={{
                                paddingLeft: { sm: 2, md: 4, lg: 20 }
                            }}>
                                <Cart />
                            </Grid2>

                            <Grid2 size={4.5} sx={{
                                position: "fixed",
                                right: 0,
                                paddingRight: { sm: 2, md: 4, lg: 20 },
                                paddingLeft: { sm: 0, lg: 4 }
                            }}>
                                <Summary activate={setActiveStep} />
                            </Grid2>
                        </Grid2>

                        <Grid2 container>
                            <Grid2 size={7.5} sx={{
                                paddingLeft: { sm: 2, md: 4, lg: 20 },
                                paddingBottom: 15,
                                paddingTop: 5
                            }}>
                                <Recommend />
                            </Grid2>
                        </Grid2>
                    </Box>

                    <Box sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%"
                    }}>
                        <CartFooter />
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default ProductCartPage;