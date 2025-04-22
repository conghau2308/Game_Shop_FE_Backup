import { Box, Grid2, Typography, Tooltip, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import CartHeader from "../CartHeader";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import CartFooter from "../CartFooter";
import useStoreCart from "../../../../hooks/cart";


function SummaryPayment() {
    const [product, setProduct] = useState([]);
    const [activeStep, setActiveStep] = useState(1);
    const [order, setOrder] = useState({});
    const [showmore, setShowmore] = useState(false);

    const isMobile = useMediaQuery("(max-width:600px)");

    const { cart, totalFinalPrice } = useStoreCart();

    const isGreater = cart.buy.length > 3;

    const vndPrice = totalFinalPrice * 25000;

    return (
        <Box sx={{
            margin: "-8px",
            bgcolor: "#272727",
            minHeight: "100vh",
            position: 'relative'
        }}>
            <CartHeader activate={activeStep} />

            <Grid2 container sx={{
                paddingLeft: { xs: 2, md: 4, lg: 30 },
                paddingRight: { xs: 2, md: 4, lg: 30 },
                paddingTop: 15
            }} spacing={{ xs: 2, sm: 2, md: 4, lg: 10 }}>
                <Grid2 size={{ xs: 12, sm: 7, md: 6.7, lg: 7.5 }} sx={{
                    borderBottom: {xs: '1px solid #999', sm: 'none'},
                    paddingBottom: {xs: 3, sm: 0}
                }}>
                    <Outlet />
                </Grid2>

                <Grid2 size={{ xs: 11, sm: 4.5 }}>
                    <Box sx={{
                        width: '100%'
                    }}>
                        <Typography sx={{
                            fontFamily: "barlow-regular",
                            fontSize: {xs: 18, sm: 20},
                            color: '#fff',
                            paddingBottom: { xs: 0, sm: 2 }
                        }}>
                            Summary
                        </Typography>
                        {isMobile && (
                            <Box sx={{
                                bgcolor: "#101010",
                                width: "100%",
                                display: "flex",
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingTop: 3,
                                paddingBottom: 3,
                                borderRadius: '10px',
                                color: '#fff',
                                marginTop: 1,
                                marginBottom: 3
                            }}>
                                <Box sx={{
                                    width: '40%'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: 15,
                                        color: '#999'
                                    }}>
                                        Order ID
                                    </Typography>

                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15,
                                        paddingTop: 1,
                                        paddingBottom: 1
                                    }}>
                                        Total in USD
                                    </Typography>

                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15
                                    }}>
                                        Total in VND
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: '60%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'right'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: 15,
                                        color: '#999'
                                    }}>
                                        ###
                                    </Typography>
    
                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15,
                                        paddingTop: 1,
                                        paddingBottom: 1
                                    }}>
                                        {totalFinalPrice} $
                                    </Typography>
    
                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15
                                    }}>
                                        {vndPrice.toLocaleString('vi-VN')} VND
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                        <Box sx={{
                            bgcolor: "#323232",
                            paddingLeft: { xs: 2, md: 4 },
                            paddingRight: { xs: 2, md: 4 },
                            paddingTop: { xs: 2, md: 3 },
                            paddingBottom: isGreater ? 6 : { xs: 2, md: 3 },
                            borderRadius: '10px',
                            width: '100%',
                            maxHeight: isGreater && !showmore ? "9.5rem" : "none",
                            position: 'relative',
                            marginBottom: {xs: 15, sm: 0}
                        }}>
                            {(isGreater && !showmore ? cart.buy.slice(0, 3) : cart.buy).map((item, index) => (
                                <Box key={index} sx={{
                                    color: '#999',
                                    display: 'flex',
                                    width: "100%",
                                    borderTop: index === 0 ? "none" : "1px solid #999",
                                    paddingTop: 1,
                                    paddingBottom: 1,
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{
                                        width: "70%"
                                    }}>
                                        <Typography sx={{
                                            color: '#fff',
                                            fontFamily: 'barlow-regular',
                                            fontSize: 15,
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 1,
                                            lineHeight: "1.5rem",
                                            height: "1.5rem"
                                        }}>
                                            {item.name}
                                        </Typography>

                                        <Typography sx={{
                                            fontFamily: 'barlow',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            lineHeight: '1rem'
                                        }}>
                                            {item.gamePlatform}
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        width: '30%',
                                        display: "flex",
                                        justifyContent: 'right'
                                    }}>
                                        <Typography sx={{
                                            fontFamily: 'barlow',
                                            fontWeight: 600,
                                            fontSize: 15
                                        }}>
                                            {/* {item.quantity === 1 ? "" : item.quantity + "x"}  */}
                                            {item.finalPrice} $
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}

                            {isGreater && !showmore && (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "10rem",
                                        position: "absolute",
                                        bottom: 10,
                                        left: 0,
                                        background: "linear-gradient(to bottom, rgba(29, 29, 29, 0) 10%, #323232 90%)"
                                    }}
                                />
                            )}

                            {isGreater && (
                                <Box
                                    sx={{
                                        color: "#fff",
                                        mt: 1,
                                        display: "flex",
                                        justifySelf: "center",
                                        position: "absolute",
                                        bottom: 13,
                                        left: '45%',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Tooltip title={showmore === true ? "Show Less" : "Show More"}
                                        slotProps={{
                                            popper: {
                                                sx: {
                                                    "& .MuiTooltip-tooltip": {
                                                        color: "#000",
                                                        bgcolor: "#fff",
                                                        fontSize: 13,
                                                        borderRadius: 0
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        <Box onClick={() => setShowmore(!showmore)}>
                                            {showmore === true ? (
                                                <RemoveOutlined sx={{
                                                    color: "#999",
                                                    fontSize: 20,
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    padding: 0.5,
                                                    "&:hover": {
                                                        color: "#fff",
                                                        borderColor: "#fff"
                                                    }
                                                }} />
                                            ) : (
                                                <AddOutlined sx={{
                                                    color: "#999",
                                                    fontSize: 20,
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    padding: 0.5,
                                                    "&:hover": {
                                                        color: "#fff",
                                                        borderColor: "#fff"
                                                    }
                                                }} />
                                            )}
                                        </Box>
                                    </Tooltip>
                                </Box>
                            )}
                        </Box>

                        {!isMobile && (
                            <Box sx={{
                                bgcolor: "#101010",
                                width: "100%",
                                display: "flex",
                                paddingLeft: { sm: 2, md: 4 },
                                paddingRight: { sm: 2, md: 4 },
                                paddingTop: 3,
                                paddingBottom: 3,
                                borderRadius: '10px',
                                color: '#fff',
                                marginTop: { sm: 3, md: 5 },
                            }}>
                                <Box sx={{
                                    width: '40%'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: 15,
                                        color: '#999'
                                    }}>
                                        Order ID
                                    </Typography>

                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15,
                                        paddingTop: 1,
                                        paddingBottom: 1
                                    }}>
                                        Total in USD
                                    </Typography>

                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: 15
                                    }}>
                                        Total in VND
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    width: '60%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    textAlign: 'right'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: 15,
                                        color: '#999'
                                    }}>
                                        ###
                                    </Typography>
    
                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: {xs: 18, sm: 20},
                                    }}>
                                        {totalFinalPrice} $
                                    </Typography>
    
                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: {xs: 18, sm: 20},
                                    }}>
                                        {vndPrice.toLocaleString('vi-VN')} VND
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Grid2>
            </Grid2>

            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%'
            }}>
                <CartFooter />
            </Box>
        </Box>
    )
}

export default SummaryPayment;