import { AddOutlined, FlagOutlined, MoreVert, RemoveOutlined, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Fade, Grid2, IconButton, Tooltip, Typography, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";


function ReadMoreReviews() {
    const [review, setReview] = useState([]);
    const [showmore, setShowmore] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [menuClick, setMenuClick] = useState(null);

    const [hoveredIndexRecent, setHoveredIndexRecent] = useState(null);

    const [expandedRecent, setExpandedRecent] = useState(null);

    const toggleExpandRecent = (index) => {
        setExpandedRecent(expandedRecent === index ? null : index);
    };

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
                avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
                like: true,
                review: "It came with the pre order bonus, and code worked, would recommend. MInecraft is an awesome and popular game so there isn't much i can say that you don't already know. I ended up buying this and didn't receive JAVA, nonetheless that doesn't effect how i love the game!!. got the code immediately, redeemed it on the official Minecraft website, downloaded the launcher and the game itself and was able to play immediately! very nice and fast, much appreciated :). someone help me, the game worked for a few days and suddenly it crashed, it says to try to pay again or log in again. But I bought the game, I didn't subscribe, so what now?",
                time: "6th March 2025",
                likes: 13,
                unlikes: 0
            },
            {
                avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
                like: true,
                review: "It came with the pre order bonus, and code worked, would recommend",
                time: "6th March 2025",
                likes: 13,
                unlikes: 0
            },
            {
                avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
                like: false,
                review: "It came with the pre order bonus, and code worked, would recommend",
                time: "6th March 2025",
                likes: 13,
                unlikes: 0
            },
            {
                avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
                like: true,
                review: "It came with the pre order bonus, and code worked, would recommend",
                time: "6th March 2025",
                likes: 13,
                unlikes: 0
            },
            {
                avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
                like: true,
                review: "It came with the pre order bonus, and code worked, would recommend. MInecraft is an awesome and popular game so there isn't much i can say that you don't already know. I ended up buying this and didn't receive JAVA, nonetheless that doesn't effect how i love the game!!. got the code immediately, redeemed it on the official Minecraft website, downloaded the launcher and the game itself and was able to play immediately! very nice and fast, much appreciated :). someone help me, the game worked for a few days and suddenly it crashed, it says to try to pay again or log in again. But I bought the game, I didn't subscribe, so what now?",
                time: "6th March 2025",
                likes: 13,
                unlikes: 0
            }
        ];
        setReview(fakedata);
    }, []);

    return (
        <Grid2 container justifyContent="center" sx={{
            bgcolor: "#272727",
            paddingLeft: { lg: 20, md: 4 },
            paddingRight: { lg: 20, md: 4 },
            paddingBottom: 7,
            paddingTop: showmore ? 7 : 4
        }} spacing={4}>
            <Grid2 size={12} sx={{
                display: showmore ? "flex" : "none"
            }}>
                <Grid2 container justifyContent="center" spacing={4}>
                    {review.map((item, index) => (
                        <Grid2 size={{ sm: 6, md: 4 }}>
                            <Card sx={{
                                bgcolor: "#1d1d1d",
                                borderRadius: "10px"
                            }}
                                onMouseEnter={() => setHoveredIndexRecent(index)}
                                onMouseLeave={() => setHoveredIndexRecent(null)}
                                key={index}
                            >
                                <CardHeader
                                    sx={{
                                        paddingLeft: 4,
                                        paddingTop: 3,
                                        paddingBottom: { sm: 0, lg: 2 }
                                    }}
                                    avatar={
                                        <Avatar src={item.avatar} sx={{
                                            height: 55,
                                            width: 55,
                                        }}></Avatar>
                                    }
                                    subheader={
                                        item.like ? <ThumbUpOutlined sx={{
                                            color: "rgb(0, 149, 0)",
                                            fontSize: 35
                                        }} /> : <ThumbDownOutlined sx={{
                                            color: "rgb(215, 23, 23)",
                                            fontSize: 35
                                        }} />
                                    }
                                    action={
                                        <Fade in={{ sm: true, lg: hoveredIndexRecent === index }} timeout={200}>
                                            <IconButton sx={{
                                                color: "#999",
                                                "&:hover": {
                                                    color: "#fff",
                                                    bgcolor: "transparent"
                                                }
                                            }}
                                                onClick={(event) => handleClick(event, index)}
                                            >
                                                <MoreVert />
                                            </IconButton>
                                        </Fade>
                                    }
                                />

                                <CardContent sx={{
                                    minHeight: "10.5rem"
                                }}>
                                    <Box sx={{
                                        position: "relative",
                                        maxHeight: expandedRecent === index ? "none" : "7.5rem",
                                        overflow: "hidden",
                                        paddingLeft: { sm: 0, md: 2 },
                                        paddingRight: { sm: 0, md: 2 }
                                    }}>
                                        <Typography sx={{
                                            color: "#999",
                                            fontSize: 15,
                                            fontFamily: "barlow-regular",
                                            display: "flex",
                                            flexDirection: "column",
                                            WebkitLineClamp: expandedRecent === index ? "unset" : 5,
                                            overflow: "hidden",
                                            transition: "all 0.3s ease-in-out",
                                            lineHeight: "1.5rem"
                                        }}>
                                            {item.review}
                                        </Typography>

                                        {!(expandedRecent === index) && item.review.length > 300 && (
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: "2rem",
                                                    position: "absolute",
                                                    bottom: 0,
                                                    left: 0,
                                                    background: "linear-gradient(to bottom, rgba(29, 29, 29, 0) 10%, #1d1d1d 90%)"
                                                }}
                                            />
                                        )}
                                    </Box>

                                    {item.review.length > 300 && (
                                        <Box
                                            sx={{
                                                color: "#fff",
                                                mt: 1,
                                                display: "flex",
                                                justifySelf: "center"
                                            }}
                                        >
                                            <Tooltip title={expandedRecent === index ? "Read Less" : "Read More"}
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
                                                <Box onClick={() => toggleExpandRecent(index)}>
                                                    {expandedRecent === index ? (
                                                        <RemoveOutlined sx={{
                                                            color: "#999",
                                                            fontSize: 25,
                                                            border: "1px solid #999",
                                                            borderRadius: 20,
                                                            padding: 1,
                                                            "&:hover": {
                                                                color: "#fff",
                                                                borderColor: "#fff"
                                                            }
                                                        }} />
                                                    ) : (
                                                        <AddOutlined sx={{
                                                            color: "#999",
                                                            fontSize: 25,
                                                            border: "1px solid #999",
                                                            borderRadius: 20,
                                                            padding: 1,
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
                                </CardContent>

                                <CardContent sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    color: "#999",
                                    alignItems: "center",
                                    paddingTop: 0,
                                    margin: { sm: 2, md: 0, lg: 2 },
                                    paddingBottom: 0
                                }}>
                                    <Typography sx={{
                                        fontSize: 16,
                                        fontFamily: "barlow",
                                        fontWeight: 500
                                    }}>
                                        {item.time}
                                    </Typography>

                                    <Box sx={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <Typography sx={{
                                            fontSize: 16,
                                            fontFamily: "barlow",
                                            fontWeight: 500,
                                            paddingRight: 2,
                                            display: { sm: "none", lg: "flex" }
                                        }}>
                                            Useful?
                                        </Typography>

                                        <Tooltip title="Useful? YES"
                                            enterDelay={200}
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
                                            <Button sx={{
                                                color: "#999",
                                                border: "1px solid #999",
                                                borderRadius: 20,
                                                minWidth: 0,
                                                width: 70,
                                                height: 40,
                                                "&:hover": {
                                                    color: "#fff",
                                                    border: "1px solid #fff"
                                                }
                                            }}>
                                                <ThumbUpOutlined sx={{
                                                    fontSize: 18
                                                }} />

                                                <Typography sx={{
                                                    fontSize: 15,
                                                    fontFamily: "barlow-regular",
                                                    paddingLeft: 1
                                                }}>
                                                    {item.likes}
                                                </Typography>
                                            </Button>
                                        </Tooltip>

                                        <Tooltip title="Useful? NO"
                                            enterDelay={200}
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
                                            <Button sx={{
                                                color: "#999",
                                                border: "1px solid #999",
                                                borderRadius: 20,
                                                minWidth: 0,
                                                width: 50,
                                                height: 40,
                                                marginLeft: 1,
                                                "&:hover": {
                                                    color: "#fff",
                                                    border: "1px solid #fff"
                                                }
                                            }}>
                                                <ThumbDownOutlined sx={{
                                                    fontSize: 18
                                                }} />
                                            </Button>
                                        </Tooltip>
                                    </Box>
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
                                >
                                    <MenuItem onClick={handleClose}>
                                        <FlagOutlined /> Report
                                    </MenuItem>
                                </Menu>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>

            <Grid2 size={12} display="flex" justifyContent="center" sx={{
                display: review.length > 0 ? "flex" : "none"
            }}>
                <Button sx={{
                    textTransform: "none",
                    border: "1px solid #999",
                    paddingTop: 2,
                    paddingBottom: 2,
                    paddingLeft: 3,
                    paddingRight: 3,
                    borderRadius: "5px",
                    "&:hover": {
                        background: "rgba(207, 207, 207, 0.13)"
                    }
                }}
                    onClick={() => setShowmore(true)}
                >
                    <Typography sx={{
                        color: "#fff",
                        fontFamily: "barlow-regular",
                        fontSize: 18
                    }}>
                        View more reviews
                    </Typography>
                </Button>
            </Grid2>
        </Grid2>
    )
}

export default ReadMoreReviews;