import { BorderColor, BorderColorOutlined } from "@mui/icons-material";
import { CircularProgress, Grid2, Typography, Box, Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useGame } from "../../../../contexts/GameContext";
import ReviewTheGame from "../../../../components/Customer/Review/ReviewGame";
import { motion } from "framer-motion";


function ReviewProduct() {
    const { product } = useGame();

    const isMobile = useMediaQuery("(max-width:600px)");

    const [isReview, setIsReview] = useState(false);

    return (
        <Box sx={{
            bgcolor: "#272727",
            paddingLeft: { lg: 20, md: 4, sm: 2, xs: 2 },
            paddingRight: { lg: 20, md: 4, sm: 2, xs: 2 }
        }}>
            <Typography sx={{
                color: "#fff",
                fontSize: { xs: 20, sm: 32 },
                paddingTop: { xs: 4, sm: 8 },
                paddingBottom: { xs: 2, sm: 5 }
            }}>
                Reviews
            </Typography>

            <Box sx={{
                bgcolor: "#323232",
                borderRadius: "10px",
                padding: { xs: 2, sm: 4 },
                paddingLeft: { xs: 2, sm: 8, md: 12, lg: 20 },
                paddingRight: { xs: 2, sm: 8, md: 10, lg: 10 }
            }}>
                <Grid2 container justifyContent="center" spacing={{ xs: 2, sm: 1, md: 3, lg: 8 }}>
                    <Grid2 size={{ xs: 12, sm: product.reviews === 0 ? 6 : 8, md: product.reviews === 0 ? 6 : 7 }} sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}>
                        {product.reviews > 0 ? (
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%"
                            }}>
                                {isMobile ? (
                                    <Box sx={{
                                        display: "flex",
                                        position: "relative"
                                    }}>
                                        <CircularProgress
                                            variant="determinate"
                                            value={product.ratingPoint * 10}
                                            size={50}
                                            thickness={2.5}
                                            style={{
                                                color: "rgba(0, 255, 0, 1)"
                                            }}
                                        />

                                        <Typography sx={{
                                            position: "absolute",
                                            color: "rgba(0, 255, 0, 1)",
                                            fontSize: 23,
                                            fontFamily: "barlow-regular",
                                            top: 7,
                                            left: product.ratingPoint === 10 ? 14 : 20
                                        }}>
                                            {product.ratingPoint}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box sx={{
                                        display: "flex",
                                        position: "relative"
                                    }}>
                                        <CircularProgress
                                            variant="determinate"
                                            value={product.ratingPoint * 10}
                                            size={65}
                                            thickness={2.5}
                                            style={{
                                                color: "rgba(0, 255, 0, 1)"
                                            }}
                                        />

                                        <Typography sx={{
                                            position: "absolute",
                                            color: "rgba(0, 255, 0, 1)",
                                            fontSize: 30,
                                            fontFamily: "barlow-regular",
                                            top: 10,
                                            left: product.ratingPoint === 10 ? 18 : 25
                                        }}>
                                            {product.ratingPoint}
                                        </Typography>
                                    </Box>
                                )}

                                <Box sx={{
                                    color: "#999",
                                    paddingLeft: 2
                                }}>
                                    <Typography sx={{
                                        color: "#fff",
                                        fontSize: { xs: 18, md: 20 },
                                        fontFamily: "barlow-regular"
                                    }}>
                                        Game review score
                                    </Typography>

                                    <Box sx={{
                                        display: "flex"
                                    }}>
                                        <Typography sx={{
                                            fontFamily: "barlow",
                                            fontSize: { xs: 13, sm: 15, md: 17 },
                                            fontWeight: 600,
                                            paddingRight: "3px"
                                        }}>
                                            based on
                                        </Typography>

                                        <Typography sx={{
                                            fontFamily: "barlow",
                                            fontSize: { xs: 13, sm: 15, md: 17 },
                                            fontWeight: 600,
                                        }}>
                                            {product.reviews}
                                        </Typography>

                                        <Typography sx={{
                                            fontFamily: "barlow",
                                            fontSize: { xs: 13, sm: 15, md: 17 },
                                            fontWeight: 600,
                                            paddingLeft: "3px"
                                        }}>
                                            reviews, all languages included
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <Typography sx={{
                                color: "#fff",
                                fontFamily: "barlow-regular",
                                fontSize: { xs: 15, md: 20 },
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                No review has been written yet.
                            </Typography>
                        )}
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: product.reviews === 0 ? 6 : 4, md: product.reviews === 0 ? 6 : 5 }} sx={{
                        justifyContent: { xs: "center", sm: "flex-start" },
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Button sx={{
                            background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                            textTransform: "none",
                            color: "#fff",
                            height: { xs: "50px", sm: "55px", md: "60px" },
                            padding: { xs: 2, sm: 3 },
                            borderRadius: "5px"
                        }}
                            onClick={() => setIsReview(!isReview)}
                        >
                            <Typography sx={{
                                fontFamily: "barlow-regular",
                                fontSize: { xs: 15, md: 18 }
                            }}>
                                Review this game!
                            </Typography>

                            <BorderColorOutlined sx={{
                                fontSize: { xs: 13, sm: 15 },
                                paddingLeft: 1
                            }} />
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>

            <motion.div
                initial={{ opacity: 0, y: -50, height: 0, visibility: 'hidden' }}
                animate={{
                    opacity: isReview ? 1 : 0,
                    y: isReview ? 0 : -50,
                    height: isReview ? 'auto' : 0,
                    visibility: isReview ? 'visible' : 'hidden',
                }}
                transition={{ duration: 0.5 }}
            >
            <Box sx={{
                marginTop: 2
            }}>
                <ReviewTheGame item={product} isOrder={false}/>
            </Box>
            </motion.div>
        </Box>
    )
}

export default ReviewProduct;