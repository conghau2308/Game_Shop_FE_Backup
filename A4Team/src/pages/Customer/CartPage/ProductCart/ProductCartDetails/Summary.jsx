import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStoreCart from "../../../../../hooks/cart";
import { useAuthStore } from "../../../../../hooks/User";
import { makePaymentService } from "../../../../../api/paymentService";
import axios from "axios";
import { useStoreAlert } from "../../../../../hooks/alert";


function Summary({ activate }) {
    const navigate = useNavigate();
    const {callWarningAlert} = useStoreAlert();

    const Gotopayment = () => {
        if (cart.buy.length === 0) {
            callWarningAlert("Your cart is empty. Add some products before you proceed to payment.");
            return;
        }
        
        activate(1);
        navigate("/make-payment/select-method")
    }

    const { totalOriginalPrice, totalDiscountPrice, totalFinalPrice, cart } = useStoreCart();

    return (
        <Box>
            <Typography sx={{
                color: "#fff",
                fontSize: { sm: 18, md: 22 },
                fontFamily: "barlow-regular",
                paddingBottom: 2,
                display: { xs: "none", sm: "flex" }
            }}>
                Summary
            </Typography>

            <Box sx={{
                bgcolor: "#141414",
                color: "#999",
                padding: 4,
                borderRadius: "10px"
            }}>
                <Box>
                    <Grid2 container>
                        <Grid2 size={6}>
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 13, md: 15 },
                                fontFamily: "barlow",
                                fontWeight: 600
                            }}>
                                Official price
                            </Typography>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 13, md: 15 },
                                fontFamily: "barlow",
                                fontWeight: 600,
                                paddingTop: 0.5,
                                paddingBottom: 0.5
                            }}>
                                Discount
                            </Typography>

                            <Typography sx={{
                                fontSize: { xs: 18, sm: 13, md: 15 },
                                fontFamily: "barlow-regular",
                                color: "#fff"
                            }}>
                                Subtotal
                            </Typography>
                        </Grid2>

                        <Grid2 size={6} justifyItems="right">
                            <Typography sx={{
                                fontSize: { xs: 15, sm: 13, md: 15 },
                                fontFamily: "barlow",
                                fontWeight: 600
                            }}>
                                {totalOriginalPrice} $
                            </Typography>

                            <Typography sx={{
                                fontSize: { xs: 15, sm: 13, md: 15 },
                                fontFamily: "barlow",
                                fontWeight: 600,
                                paddingTop: 0.5
                            }}>
                                {totalDiscountPrice} $
                            </Typography>

                            <Typography sx={{
                                fontSize: { xs: 18, sm: 15, md: 20 },
                                fontFamily: "barlow-regular",
                                color: "#fff"
                            }}>
                                {totalFinalPrice} $
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>

                <Button sx={{
                    textTransform: "none",
                    background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                    color: "#fff",
                    fontFamily: "barlow-regular",
                    fontSize: { xs: 15, sm: 15, md: 17 },
                    width: "100%",
                    display: "flex",
                    justifySelf: "center",
                    padding: { sm: 1, md: 1.7 },
                    marginTop: 3,
                    marginBottom: { sm: 3, md: 5 }
                }}
                    onClick={Gotopayment}
                >
                    Go to payment <NavigateNext sx={{
                        fontSize: { xs: 20, sm: 20, md: 23 },
                        paddingLeft: { xs: 0.1, sm: 1 }
                    }} />
                </Button>

                <Box sx={{
                    position: "relative",
                    height: "25px",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center"
                }}>
                    <Box sx={{
                        height: "1px",
                        width: "100%",
                        bgcolor: "#999"
                    }}></Box>

                    <Typography sx={{
                        position: "absolute",
                        left: "45%",
                        bottom: 0,
                        fontSize: { sm: 13, md: 16 },
                        fontFamily: "barlow",
                        fontWeight: 600,
                        bgcolor: "#141414",
                        width: "40px",
                        display: "flex",
                        justifyContent: "center",
                        height: "25px"
                    }}>
                        or
                    </Typography>
                </Box>

                <Box sx={{
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "center",
                    paddingTop: 2,
                    cursor: "pointer",
                    ":hover": {
                        color: "#fff"
                    }
                }}
                    onClick={() => navigate("/homepage")}
                >
                    <NavigateBefore sx={{
                        fontSize: { sm: 15, md: 20 },
                        paddingRight: 1
                    }} />

                    <Typography sx={{
                        fontSize: { sm: 12, md: 14 },
                        fontFamily: "barlow",
                        fontWeight: 600
                    }}>
                        Continue shopping
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Summary;