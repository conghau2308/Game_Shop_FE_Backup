import { Grid2, Typography, Box, CircularProgress, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getGameWithDetailByGameIdService } from "../../../../api/gameListService";
import { useParams } from "react-router-dom";
import { useGame } from "../../../../contexts/GameContext";


function AboutProduct() {
    const { product } = useGame();
    const [expanded, setExpanded] = useState(false);

    return (
        <Box>
            {product && (
                <Grid2 container justifyContent="center" spacing={{lg: 12, md: 5, sm: 3, xs: 2}} sx={{
                    bgcolor: "#272727",
                    paddingLeft: {lg: 20, md: 4, sm: 2, xs: 2},
                    paddingRight: {lg: 20, md: 4, sm: 2, xs: 2},
                    paddingTop: {xs: 2, sm: 3}
                }}>
                    <Grid2 size={{xs: 12, md: 7, lg: 6}}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: {xs: 20, sm: 32},
                            fontFamily: "barlow-regular",
                            paddingBottom: {xs: 1, sm: 2, md: 4}
                        }}>
                            About
                        </Typography>

                        <Box sx={{
                            position: "relative",
                            maxHeight: expanded ? "none" : {xs: "6.5rem", sm: "7.5rem"},
                            overflow: "hidden"
                        }}>
                            <Typography sx={{
                                color: "#999",
                                fontSize: {xs: 13, sm: 15},
                                fontFamily: "barlow-regular",
                                display: "flex",
                                flexDirection: "column",
                                WebkitLineClamp: expanded ? "unset" : 5,
                                overflow: "hidden",
                                transition: "all 0.3s ease-in-out",
                                lineHeight: {xs: "1.3rem", sm: "1.5rem"}
                            }}>
                                {product.gameDescription}
                            </Typography>

                            {!expanded && product.gameDescription?.length > 300 && (
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "2rem",
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        background: "linear-gradient(to bottom, rgba(50, 50, 50, 0), #272727)"
                                    }}
                                />
                            )}
                        </Box>

                        {product.gameDescription?.length > 300 && (
                            <Button onClick={() => setExpanded(!expanded)} sx={{
                                textTransform: "none",
                                minWidth: 0,
                                padding: 0
                            }}>
                                <Typography sx={{
                                    color: "#999",
                                    textDecoration: "underline",
                                    textDecorationThickness: "1px",
                                    fontSize: {xs: 13, sm: 15},
                                    "&:hover": {
                                        color: "#fff"
                                    }
                                }}
                                >
                                    {expanded ? "Read less" : "Read more"}
                                </Typography>
                            </Button>
                        )}
                    </Grid2>

                    <Grid2 size={{xs: 12, md: 5, lg: 6}} sx={{
                        display: {sm: "flex", md: "block"}
                    }} id="wrap">
                        <Box sx={{
                            display: "flex",
                            paddingBottom: {xs: 2, sm: 4},
                            minWidth: {xs: "100%", sm: "40%", md: "none"},
                            justifyContent: {xs: "center", md: "normal"}
                        }}>
                            <Box sx={{
                                position: "relative"
                            }}>
                                <CircularProgress
                                    variant="determinate"
                                    value={product.ratingPoint * 10}
                                    size={43}
                                    thickness={2.5}
                                    style={{
                                        color: "rgba(0, 255, 0, 1)"
                                    }}
                                />

                                <Typography sx={{
                                    color: "rgba(0, 255, 0, 1)",
                                    position: "absolute",
                                    left: product.ratingPoint === 10 ? 13 : 17,
                                    top: 8,
                                    fontSize: 18,
                                    fontFamily: "barlow-regular"
                                }}>
                                    {product.ratingPoint}
                                </Typography>
                            </Box>

                            <Box sx={{
                                paddingLeft: {xs: "10px", sm: "20px"}
                            }}>
                                <Typography sx={{
                                    color: "#999",
                                    fontSize: {xs: 15, sm: 18}
                                }}>
                                    Base on
                                </Typography>

                                <Typography sx={{
                                    color: "#fff",
                                    fontSize: {xs: 13, sm: 15}
                                }}>
                                    {product.reviews} reviews
                                </Typography>
                            </Box>
                        </Box>

                        <Grid2 container sx={{
                            minWidth: {xs: "100%", sm: "60%", md: "none"}
                        }}>
                            <Grid2 size={{xs: 5, sm: 4}} sx={{
                                color: "#999"
                            }}>
                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    Developer:
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    Publisher:
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    Release date:
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    Genre:
                                </Typography>
                            </Grid2>

                            <Grid2 size={{xs: 7, sm: 8}} sx={{
                                color: "#fff"
                            }}>
                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    {product.developerName}
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    {product.publisherName}
                                </Typography>

                                <Typography sx={{
                                    color: "#999",
                                    fontSize: {xs: 13, sm: 15},
                                    fontFamily: "barlow-regular"
                                }}>
                                    {product.releaseDate}
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    {product.genreNames}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            )}
        </Box>
    )
};

export default AboutProduct;