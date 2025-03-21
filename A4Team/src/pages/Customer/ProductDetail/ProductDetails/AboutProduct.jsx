import { Grid2, Typography, Box, CircularProgress, Button } from "@mui/material";
import { useEffect, useState } from "react";


function AboutProduct() {
    const [product, setProduct] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const fakedata = [
            {
                description: "Embrace mind-blowing moments as you’re pulled deep into the many worlds of Split Fiction, a boundary-pushing co-op action adventure from the studio behind 2021 Game of the Year Winner, It Takes Two. Mio and Zoe are contrasting writers – one writes sci-fi and the other writes fantasy – who become trapped in their own stories after being hooked up to a machine designed to steal their creative ideas. They’ll have to rely on each other to break free with their memories in-tact, working together to master a variety of abilities and overcome diverse challenges while jumping between sci-fi and fantasy worlds in this unexpected tale of friendship. Split Fiction is a unique action-adventure experience that keeps you on the edge of your couch with unexpected moments. One minute you’re taming adorable dragons and the next you’re fighting as cyber ninjas, escaping terrifying trolls, or dodging hover cars thrown by a robotic parking attendant. It’s weird, it’s wild, and it’s designed to be shared. Grab your co-op partner and get ready to overcome any obstacle thrown your way.",
                Developer: "Hazelight Studios",
                Publisher: "Electronic Arts",
                Genre: "Action, Adventure, RPG",
                "Release date": "6 March 2025",
                reviews: 79,
                rating: 9
            }
        ];
        setProduct(fakedata);
    }, []);

    return (
        <Box>
            {product.map((product) => (
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
                                {product.description}
                            </Typography>

                            {!expanded && product.description.length > 300 && (
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

                        {product.description.length > 300 && (
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
                                    value={product.rating * 10}
                                    size={43}
                                    thickness={2.5}
                                    style={{
                                        color: "rgba(0, 255, 0, 1)"
                                    }}
                                />

                                <Typography sx={{
                                    color: "rgba(0, 255, 0, 1)",
                                    position: "absolute",
                                    left: product.rating === 10 ? 13 : 17,
                                    top: 8,
                                    fontSize: 18,
                                    fontFamily: "barlow-regular"
                                }}>
                                    {product.rating}
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
                                    {product.Developer}
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    {product.Publisher}
                                </Typography>

                                <Typography sx={{
                                    color: "#999",
                                    fontSize: {xs: 13, sm: 15},
                                    fontFamily: "barlow-regular"
                                }}>
                                    {product["Release date"]}
                                </Typography>

                                <Typography sx={{ fontSize: {xs: 13, sm: 15}, fontFamily: "barlow-regular" }}>
                                    {product.Genre}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            ))}
        </Box>
    )
};

export default AboutProduct;