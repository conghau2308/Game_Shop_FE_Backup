import { FlagOutlined, MoreVert, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { CardMedia, Box, CardHeader, Avatar, Card, Typography, CardContent, Menu, MenuItem, IconButton, useMediaQuery, ImageList, Grid2, Container, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { getLimitedReviewsService } from "../../../../api/reviewsService";
import MobileSkeleton from "../../../../components/Customer/Skeleton/mobile";
import NotMobileSkeleton from "../../../../components/Customer/Skeleton/notMobile";
import { useStoreAlert } from "../../../../hooks/alert";

function Review() {
    const [reviews, setReviews] = useState([]);
    const [menuClick, setMenuClick] = useState(null);
    const isMobile = useMediaQuery("(max-width:600px)");
    const isMediumdDevice = useMediaQuery("(max-width:1200px)");

    const {callErrorAlert} = useStoreAlert();

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
        const fetchReviews = async () => {
            const res = await getLimitedReviewsService(4);
            if (res.statusCode === 200) {
                console.log("Reviews data: ", res.data);
                setReviews(res.data);
            }
            else {
                console.log("Error fetching reviews: ", res.errors);
                // callErrorAlert("Failed to load gamer's comments. Please try again later.");
            }
        }
        fetchReviews();
    }, []);

    return (
        <Box sx={{
            paddingBottom: 5
        }}>
            <Typography sx={{
                color: "white",
                fontSize: { xs: 20, md: 32, sm: 25 },
                fontFamily: "barlow-regular",
                paddingLeft: { xs: 5, sm: 2, md: 4, lg: 20 },
                paddingBottom: { xs: 1, sm: 3 }
            }}>
                Gamer reviews
            </Typography>
            {isMobile ? (
                <Box sx={{
                    padding: "0 20px 0 20px"
                }}>
                    {reviews.length > 0 ? (
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
                                            image={rev.game.image}
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
                                            <Avatar src={rev.user.avatar} sx={{
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
                                                {rev.comment}
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
                    ) : (
                        <MobileSkeleton />
                    )}
                </Box>
            ) : (
                reviews.length > 0 ? (
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
                                    image={rev.game.image}
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
                                    <Avatar src={rev.user.avatar} sx={{
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
                                        {rev.comment}
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
                ) : (
                    <NotMobileSkeleton number={isMediumdDevice ? 3 : 4} size={{ sm: 3.5, lg: 2.7 }}/>
                )
            )}
        </Box>
    );
}

export default Review;
