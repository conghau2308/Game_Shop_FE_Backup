import { Box, Rating, Stack, Typography, Grid2, Grid, Container, useMediaQuery } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { CloudDownloadOutlined, ForumOutlined, GppGoodOutlined, StarBorder } from "@mui/icons-material";

function Information() {
    const isSmall = useMediaQuery("(max-width:400px)");
    return (
        <Box sx={{
            bgcolor: "#101010",
            padding: "30px 0 30px 0",
            color: "white",
            fontFamily: "barlow",
            paddingLeft: {xs: 1, sm: 3, md: 3},
            paddingRight: {xs: 1, sm: 3, md: 3},
            margin: {xs: "50px 0 0 0", sm: "50px 0 50px 0"}
        }}>
            <Grid2 container spacing={4} justifyContent="space-evenly" alignItems="center">
                <Grid2 display={{xs: "none", sm: "none", md: "none", lg: "flex"}}>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <CloudDownloadOutlined sx={{
                            fontSize: {xs: 30, sm: 50},
                            color: "#ff5400"
                        }}/>

                        <Container>
                            <Typography sx={{
                                fontSize: {xs: 15, sm: 20}
                            }}>
                                Super fast
                            </Typography>

                            <Typography sx={{
                                fontSize: {xs: 10, sm: 15},
                                color: "#999"
                            }}>
                                Instant digital download
                            </Typography>
                        </Container>
                    </Box>
                </Grid2>

                <Grid2 display={{xs: "none", sm: "none", md: "none", lg: "flex"}}>
                    <Box sx={{
                        width: "1px",
                        height: "50px",
                        bgcolor: "#999"
                    }}></Box>
                </Grid2>

                <Grid2 display={{xs: "none", sm: "flex", md: "flex"}}>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <GppGoodOutlined sx={{
                            fontSize: {xs: 30, sm: 40, md: 50},
                            color: "#ff5400"
                        }}/>

                        <Typography>
                            <Typography sx={{
                                fontSize: {xs: 15, sm: 15, md: 20}
                            }}>
                                Reliable & safe
                            </Typography>

                            <Typography sx={{
                                fontSize: {xs: 10, sm: 13, md: 15},
                                color: "#999"
                            }}>
                                Over 10,000 games
                            </Typography>
                        </Typography>
                    </Box>
                </Grid2>

                <Grid2 display={{xs: "none", sm: "flex", md: "flex"}}>
                    <Box sx={{
                        width: "1px",
                        height: "50px",
                        bgcolor: "#999"
                    }}></Box>
                </Grid2>

                <Grid2>
                    <Box sx={{
                        display: "flex"
                    }}>
                        <ForumOutlined sx={{
                            fontSize: {xs: 35, sm: 40, md: 50},
                            color: "#ff5400",
                            display: isSmall ? "none" : "flex"
                        }}/>

                        <Typography>
                            <Typography sx={{
                                fontSize: isSmall ? 13 : {xs: 15, sm: 15, md: 20}
                            }}>
                                Customer support
                            </Typography>

                            <Typography sx={{
                                fontSize: isSmall ? 10 : {xs: 13, sm: 13, md: 15},
                                color: "#999"
                            }}>
                                Human support 24/7
                            </Typography>
                        </Typography>
                    </Box>
                </Grid2>

                <Grid2>
                    <Box sx={{
                        width: "1px",
                        height: "50px",
                        bgcolor: "#999"
                    }}></Box>
                </Grid2>

                <Grid2>
                    <Box>
                        <Typography sx={{
                            display: "flex",
                            alignItems: "flex-end"
                        }}>
                            <StarIcon sx={{
                                color: "green",
                                fontSize: {xs: 25, sm: 30, md: 35}
                            }}/>
                            <Typography sx={{
                                fontSize: isSmall ? 13 : {xs: 15, sm: 18, md: 20}
                            }}>
                                Trustpilot
                            </Typography>
                        </Typography>

                        <Rating
                            readOnly
                            defaultValue={4.7}
                            precision={0.5}
                            emptyIcon={<StarIcon sx={{color: "white", fontSize: {xs: 25, sm: 30}}} />}
                            icon={<StarIcon sx={{fontSize: {xs: 25, sm: 30}}} />}
                            sx={{
                                color: "green",
                                border: "2px solid white"
                            }}
                        />

                        <Typography sx={{
                            display: {xs: "none", sm: "flex", md: "flex"},
                            fontSize: {xs: 15, sm: 10, md: 15}
                        }}>
                            TrustScore <Typography sx={{
                                fontWeight: "bold",
                                padding: "0 5px 0 5px",
                                fontSize: {xs: 15, sm: 10, md: 15}
                            }}>
                                    4,7 | 745,402</Typography> reviews
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default Information;