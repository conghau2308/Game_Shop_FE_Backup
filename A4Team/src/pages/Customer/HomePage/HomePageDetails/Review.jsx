import { FlagOutlined, MoreVert, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { CardMedia, Box, CardHeader, Avatar, Card, Typography, CardContent, Menu, MenuItem, IconButton, useMediaQuery, ImageList, Grid2, Container, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

function Review() {
    const [reviews, setReviews] = useState([]);
    const [menuClick, setMenuClick] = useState(null);
    const isMobile = useMediaQuery("(max-width:600px)");
    const isMediumdDevice = useMediaQuery("(max-width:1200px)");

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleClick = (event, index) => {
        setMenuClick(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setMenuClick(null);
        setSelectedIndex(null);
    };

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "dislike",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            },
            {
                image: "https://gaming-cdn.com/images/products/6512/616x353/metro-exodus-gold-edition-gold-edition-pc-game-steam-cover.jpg?v=1651160153",
                avatar: "https://gaming-cdn.com/images/avatars/26638165-1737153089.jpg",
                status: "like",
                review: "Most reviews on this game are about Instant Gamings fast and reliable code giving, but not the game itself. The Game is a disappointment to the entire Civ franchise and Sid Meiers himself. I played the game, only to realize that"
            }
        ];
        setReviews(fakedata);
    }, []);

    return (
        <Box sx={{
            paddingBottom: 5
        }}>
            <Typography sx={{
                color: "white",
                fontSize: {xs: 20, md: 32, sm: 25},
                fontFamily: "barlow-regular",
                paddingLeft: {xs: 5, sm: 2, md: 4, lg: 20},
                paddingBottom: {xs: 1, sm: 3}
            }}>
                Gamer reviews
            </Typography>
            {isMobile ? (
                <Box sx={{
                    padding: "0 20px 0 20px"
                }}>
                <ImageList sx={{
                    flexWrap: "nowrap",
                    overflowX: "scroll",
                    display: "flex",
                    flexDirection: "row"
                }} gap={20}>
                    {reviews.map((rev, index) => (
                        <ImageListItem sx={{
                            minWidth: "70%",
                            flex: "0 0 70%"
                        }} key={index}>
                            <Card sx={{
                                position: "relative",
                                borderRadius: "10px",
                                bgcolor: "#3d3d3d",
                            }}>
                                <CardMedia
                                    component="img"
                                    image={rev.image}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}
                                />

                                <CardContent sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifySelf: "center"
                                }}>
                                    <Avatar src={rev.avatar} sx={{
                                        width: { lg: 60 },
                                        height: { lg: 60 }
                                    }}></Avatar>

                                    <Container>
                                        {rev.status === "like" ? <ThumbUpOutlined sx={{
                                            fontSize: { lg: 30 },
                                            color: "green"
                                        }} /> : <ThumbDownOutlined sx={{
                                            fontSize: { lg: 30 },
                                            color: "red",
                                        }} />}
                                    </Container>

                                    <IconButton sx={{
                                        position: "absolute",
                                        right: 5,
                                        color: "white"
                                    }}
                                        onClick={(event) => handleClick(event, index)}
                                    >
                                        <MoreVert />
                                    </IconButton>
                                </CardContent>

                                <CardContent sx={{paddingTop: 0}}>
                                    <Typography sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 4,
                                        lineHeight: "1.5rem",
                                        height: "6rem",
                                        fontSize: 16,
                                        color: "#999",
                                        fontFamily: "barlow-regular"
                                    }}>
                                        {rev.review}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Menu
                                anchorEl={menuClick}
                                open={Boolean(menuClick) && selectedIndex === index}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                disableScrollLock={true}
                            >
                                <MenuItem onClick={handleClose}>
                                    <FlagOutlined /> Report
                                </MenuItem>
                            </Menu>
                        </ImageListItem>
                    ))}
                </ImageList>
                </Box>
            ) : (
                <Grid2 container justifyContent="space-evenly">
                    {(isMediumdDevice ? reviews.slice(0, 3) : reviews).map((rev, index) => (
                        <Grid2 key={index} size={{ lg: 2.7, sm: 3.5 }}>
                            <Card sx={{
                                borderRadius: "10px",
                                bgcolor: "#3d3d3d",
                                position: "relative"
                            }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <CardMedia
                                    component="img"
                                    image={rev.image}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}
                                />

                                <CardContent sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifySelf: "center"
                                }}>
                                    <Avatar src={rev.avatar} sx={{
                                        width: { lg: 50 },
                                        height: { lg: 50 }
                                    }}></Avatar>

                                    <Container>
                                        {rev.status === "like" ? <ThumbUpOutlined sx={{
                                            fontSize: { lg: 30 },
                                            color: "green"
                                        }} /> : <ThumbDownOutlined sx={{
                                            fontSize: { lg: 30 },
                                            color: "red",
                                        }} />}
                                    </Container>

                                    {hoveredIndex === index && (
                                        <IconButton sx={{
                                            position: "absolute",
                                            right: 10,
                                            color: "white"
                                        }}
                                            onClick={(event) => handleClick(event, index)}
                                        >
                                            <MoreVert />
                                        </IconButton>
                                    )}
                                </CardContent>

                                <CardContent sx={{ paddingTop: 0 }}>
                                    <Typography sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 4,
                                        lineHeight: "1.5rem",
                                        height: "6rem",
                                        fontSize: 16,
                                        color: "#999",
                                        fontFamily: "barlow-regular"
                                    }}>
                                        {rev.review}
                                    </Typography>
                                </CardContent>

                            <Menu
                                anchorEl={menuClick}
                                open={Boolean(menuClick) && selectedIndex === index}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                disableScrollLock={true}
                            >
                                <MenuItem onClick={handleClose}>
                                    <FlagOutlined /> Report
                                </MenuItem>
                            </Menu>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            )}
        </Box>
    );
}

export default Review;
