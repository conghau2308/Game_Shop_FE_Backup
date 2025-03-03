import { Box, Card, CardContent, CardMedia, Container, Grid2, ImageList, Typography, useMediaQuery, Stack, Button, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

function Categories() {
    const [categoty, setCategory] = useState([]);
    const isMobile = useMediaQuery("(max-width:600px)");
    const [viewall, setViewall] = useState(false);

    const handleViewall = () => {
        setViewall(!viewall);
    }

    useEffect(() => {
        const data = [
            {
                category: "Action",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background1.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon1.png",
            },
            {
                category: "Adventure",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background4.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon4.png",
            },
            {
                category: "Arcade",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background2.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon2.png"
            },
            {
                category: "Beat'em all",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background5.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon5.png"
            },
            {
                category: "Cooperation",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background24.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon24.png"
            },
            {
                category: "Management",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background10.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon10.png"
            },
            {
                category: "Multiplayer",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background23.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon23.png"
            },
            {
                category: "FPS",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background9.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon9.png"
            },
            {
                category: "Single-player",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background47.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon47.png"
            },
            {
                category: "Wargame",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background18.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon18.png"
            },
            {
                category: "VR",
                background: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-background31.jpg",
                image: "https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon31.png"
            }
        ];
        setCategory(data);
    }, []);

    return (
        <Box sx={{
            paddingTop: 5,
            paddingBottom: 5
        }}>
            <Box sx={{
                paddingLeft: { xs: 2, sm: 2, md: 4, lg: 20 },
                paddingBottom: { xs: 0, sm: 3 },
                paddingRight: { xs: 2, sm: 2, md: 4, lg: 20 },
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    color: "white",
                    fontSize: { xs: 20, md: 32, sm: 25 },
                    fontFamily: "barlow-regular",

                }}>
                    Categories
                </Typography>

                <Button sx={{
                    color: "white",
                    fontFamily: "barlow",
                    fontWeight: "600",
                    border: "1px solid white",
                    bgcolor: "#3d3d3d",
                    height: "80%",
                    borderRadius: "5px",
                    textTransform: "none",
                    fontSize: {md: 15, sm: 13},
                    display: {xs: "none", sm: "flex"}
                }} onClick={handleViewall}>
                    {viewall === false ? "View all" : "View less"}
                </Button>
            </Box>

            {isMobile ? (
                <ImageList sx={{
                    flexWrap: "nowrap",
                    overflowX: "scroll",
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: 2,
                    paddingRight: 2,
                }} gap={15}>
                    {categoty.map((item, index) => (
                        <ImageListItem key={index}>
                            <Box sx={{
                                backgroundImage: `linear-gradient(100deg, rgba(50, 50, 50, .4), #323232 300%), url(${item.background})`,
                                backgroundSize: "cover",
                                width: "65vw",
                                height: "150px",
                                objectFit: "cover",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                position: "relative",
                                borderRadius: "10px",
                            }}>
                                <Typography sx={{
                                    position: "absolute",
                                    left: 15,
                                    bottom: "40%",
                                    color: "white",
                                    fontSize: {md: 25, sm: 20},
                                    fontFamily: "barlow",
                                    fontWeight: "800",
                                    zIndex: 2,
                                }}>
                                    {item.category}
                                </Typography>

                                <Box component="img" src={item.image}
                                    sx={{
                                        position: "absolute",
                                        right: 0,
                                        maxHeight: "90%",
                                        objectFit: "contain"
                                    }}
                                />
                            </Box>
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (
                <Grid2 container spacing={{md: 4, sm: 2}} justifyContent="center" sx={{
                    paddingLeft: {lg: 20, sm: 2, md: 4},
                    paddingRight: {lg: 20, sm: 2, md: 4},
                }}>
                    {( viewall === false ? categoty.slice(0, 9) : categoty).map((item, index) => (
                        <Grid2 key={index} size={4} paddingBottom={{lg: 2, sm: 0}} paddingTop={{md: 5, sm: 0}}>
                            <Box sx={{
                                backgroundImage: `linear-gradient(100deg, rgba(50, 50, 50, .4), #323232 300%), url(${item.background})`,
                                backgroundSize: "cover",
                                width: "auto",
                                height: {lg: "200px", md: "180px", sm: "130px"},
                                objectFit: "cover",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                position: "relative",
                                borderRadius: "10px",
                            }}>
                                <Typography sx={{
                                    position: "absolute",
                                    left: {md: 20, sm: 15},
                                    bottom: "40%",
                                    color: "white",
                                    fontSize: {md: 25, sm: 20},
                                    fontFamily: "barlow",
                                    fontWeight: "800",
                                    zIndex: 2,
                                }}>
                                    {item.category}
                                </Typography>

                                <Box component="img" src={item.image}
                                    sx={{
                                        position: "absolute",
                                        right: 0,
                                        maxHeight: {lg: "120%", md: "110%", sm: "90%"},
                                        objectFit: "contain",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "translate(-5px, -5px) scale(1.05, 1.05)",
                                        }
                                    }}
                                />
                            </Box>
                        </Grid2>
                    ))}
                </Grid2>
            )}
        </Box>
    )
}

export default Categories;