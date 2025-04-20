import { AddOutlined, MoreVert, RemoveOutlined, ThumbDownOutlined, ThumbUpOutlined, FlagOutlined } from "@mui/icons-material";
import { CardHeader, Grid2, Card, Avatar, CardContent, Typography, Box, Button, IconButton, Fade, Tooltip, Menu, MenuItem, useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { getListReviewsByGameIdService } from "../../../../api/reviewsService";
import { useParams } from "react-router-dom";
import { formattedDateMonthYear } from "../../../../ultils/time";


function UserReviews() {
    const [bestReview, setBestReview] = useState([]);
    const [recentReview, setRecentReview] = useState([]);

    const { id } = useParams();

    const isMobile = useMediaQuery("(max-width:600px)");

    const [hoveredIndexBest, setHoveredIndexBest] = useState(null);
    const [hoveredIndexRecent, setHoveredIndexRecent] = useState(null);

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const [expandedRecent, setExpandedRecent] = useState(null);

    const toggleExpandRecent = (index) => {
        setExpandedRecent(expandedRecent === index ? null : index);
    };

    // Hoặc có thể dùng call back --> setExpanded(preIndex => (preIndex === index ? null : index))

    const [selectedIndexBest, setSelectedIndexBest] = useState(null);
    const [selectedIndexRecent, setSelectedIndexRecent] = useState(null);
    const [menuClick, setMenuClick] = useState(null);

    const handleClickBest = (event, index) => {
        setMenuClick(event.currentTarget);
        setSelectedIndexBest(index);
    };

    const handleClickRecent = (event, index) => {
        setMenuClick(event.currentTarget);
        setSelectedIndexRecent(index);
    };

    const handleClose = () => {
        setMenuClick(null);
        setSelectedIndexBest(null);
        setSelectedIndexRecent(null);
    };

    useEffect(() => {
        const fetchBestReviews = async () => {
            const res = await getListReviewsByGameIdService(id, 1);
            if (res.statusCode === 200) {
                setBestReview(res.data);
                console.log("Best Reviews data: ", res.data);
            }
            else {
                console.log("Error fetching best reviews: ", res.errors)
            }
        }

        fetchBestReviews();
    }, [id])


    useEffect(() => {
        const fetchRecentReviews = async () => {
            const res = await getListReviewsByGameIdService(id, 0);
            if (res.statusCode === 200) {
                setRecentReview(res.data);
                console.log("Recent reviews data: ", res.data);
            }
            else {
                console.log("Error fetching recent reviews: ", res.errors);
            }
        }

        fetchRecentReviews();
    }, [id]);

    return (
        <Box sx={{
            display: recentReview?.length ? "block" : "none"
        }}>
            {isMobile ? (
                <Box sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingBottom: 10
                }}>
                    <Box sx={{
                        display: bestReview?.length ? "block" : "none"
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 15,
                            fontFamily: "barlow-regular"
                        }}>
                            Best reviews
                        </Typography>

                        <ImageList sx={{
                            flexWrap: "nowrap",
                            overflowX: "scroll",
                            display: "flex",
                            flexDirection: "row"
                        }} gap={15}>
                            {bestReview.map((item, index) => (
                                <ImageListItem sx={{
                                    width: "85vw"
                                }}>
                                    <Card sx={{
                                        bgcolor: "#323232",
                                        borderRadius: "10px",
                                        width: "85vw"
                                    }}
                                        key={index}
                                    >
                                        <CardHeader
                                            sx={{
                                                paddingLeft: 4,
                                                paddingTop: 3,
                                                paddingBottom: 0
                                            }}
                                            avatar={
                                                <Avatar src={item.user.avatar} sx={{
                                                    height: 50,
                                                    width: 50,
                                                }}></Avatar>
                                            }
                                            subheader={
                                                item.status === "like" ? <ThumbUpOutlined sx={{
                                                    color: "rgb(0, 149, 0)",
                                                    fontSize: 30
                                                }} /> : <ThumbDownOutlined sx={{
                                                    color: "rgb(215, 23, 23)",
                                                    fontSize: 30
                                                }} />
                                            }
                                            action={
                                                <IconButton sx={{
                                                    color: "#999"
                                                }}
                                                    onClick={(event) => handleClickBest(event, index)}
                                                >
                                                    <MoreVert />
                                                </IconButton>
                                            }
                                        />

                                        <CardContent sx={{
                                            minHeight: "9.1rem"
                                        }}>
                                            <Box sx={{
                                                position: "relative",
                                                maxHeight: expanded === index ? "none" : "6.5rem",
                                                overflow: "hidden",
                                                padding: 0
                                            }}>
                                                <Typography sx={{
                                                    color: "#999",
                                                    fontSize: 13,
                                                    fontFamily: "barlow-regular",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    WebkitLineClamp: expanded === index ? "unset" : 5,
                                                    overflow: "hidden",
                                                    transition: "all 0.3s ease-in-out",
                                                    lineHeight: "1.3rem"
                                                }}>
                                                    {item.comment}
                                                </Typography>

                                                {!(expanded === index) && item.comment.length > 300 && (
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            height: "2rem",
                                                            position: "absolute",
                                                            bottom: 0,
                                                            left: 0,
                                                            background: "linear-gradient(to bottom, rgba(50, 50, 50, 0), rgba(50, 50, 50, 1))"
                                                        }}
                                                    />
                                                )}
                                            </Box>

                                            {item.comment.length > 300 && (
                                                <Box
                                                    sx={{
                                                        color: "#fff",
                                                        mt: 1,
                                                        display: "flex",
                                                        justifySelf: "center"
                                                    }}
                                                    onClick={() => toggleExpand(index)}
                                                >
                                                    {expanded === index ? (
                                                        <RemoveOutlined sx={{
                                                            color: "#999",
                                                            fontSize: 15,
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
                                                            fontSize: 15,
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
                                            )}
                                        </CardContent>

                                        <CardContent sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            color: "#999",
                                            alignItems: "center",
                                            paddingTop: 0,
                                            paddingBottom: 0
                                        }}>
                                            <Typography sx={{
                                                fontSize: 13,
                                                fontFamily: "barlow",
                                                fontWeight: 500
                                            }}>
                                                {formattedDateMonthYear(item.createdAt)}
                                            </Typography>

                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center"
                                            }}>
                                                <Button sx={{
                                                    color: "#999",
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    minWidth: 0,
                                                    width: 65,
                                                    height: 35
                                                }}>
                                                    <ThumbUpOutlined sx={{
                                                        fontSize: 18
                                                    }} />

                                                    <Typography sx={{
                                                        fontSize: 13,
                                                        fontFamily: "barlow-regular",
                                                        paddingLeft: 1
                                                    }}>
                                                        {item.useFul}
                                                    </Typography>
                                                </Button>

                                                <Button sx={{
                                                    color: "#999",
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    minWidth: 0,
                                                    width: 45,
                                                    height: 35,
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
                                            </Box>
                                        </CardContent>

                                        <Menu
                                            anchorEl={menuClick}
                                            open={Boolean(menuClick) && selectedIndexBest === index}
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
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>

                    <Box sx={{
                        paddingTop: 2
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 15,
                            fontFamily: "barlow-regular"
                        }}>
                            Recent reviews
                        </Typography>

                        <ImageList sx={{
                            flexWrap: "nowrap",
                            overflowX: "scroll",
                            display: "flex",
                            flexDirection: "row"
                        }} gap={15}>
                            {recentReview.map((item, index) => (
                                <ImageListItem sx={{
                                    width: "85vw"
                                }}>
                                    <Card sx={{
                                        bgcolor: "#1d1d1d",
                                        borderRadius: "10px",
                                        width: "85vw"
                                    }}
                                        key={index}
                                    >
                                        <CardHeader
                                            sx={{
                                                paddingLeft: 4,
                                                paddingTop: 3,
                                                paddingBottom: 0
                                            }}
                                            avatar={
                                                <Avatar src={item.user.avatar} sx={{
                                                    height: 50,
                                                    width: 50,
                                                }}></Avatar>
                                            }
                                            subheader={
                                                item.status === "like" ? <ThumbUpOutlined sx={{
                                                    color: "rgb(0, 149, 0)",
                                                    fontSize: 30
                                                }} /> : <ThumbDownOutlined sx={{
                                                    color: "rgb(215, 23, 23)",
                                                    fontSize: 30
                                                }} />
                                            }
                                            action={
                                                <IconButton sx={{
                                                    color: "#999"
                                                }}
                                                    onClick={(event) => handleClickRecent(event, index)}
                                                >
                                                    <MoreVert />
                                                </IconButton>
                                            }
                                        />

                                        <CardContent sx={{
                                            minHeight: "9.1rem"
                                        }}>
                                            <Box sx={{
                                                position: "relative",
                                                maxHeight: expandedRecent === index ? "none" : "6.5rem",
                                                overflow: "hidden"
                                            }}>
                                                <Typography sx={{
                                                    color: "#999",
                                                    fontSize: 13,
                                                    fontFamily: "barlow-regular",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    WebkitLineClamp: expandedRecent === index ? "unset" : 5,
                                                    overflow: "hidden",
                                                    transition: "all 0.3s ease-in-out",
                                                    lineHeight: "1.3rem"
                                                }}>
                                                    {item.comment}
                                                </Typography>

                                                {!(expandedRecent === index) && item.comment.length > 300 && (
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

                                            {item.comment.length > 300 && (
                                                <Box
                                                    sx={{
                                                        color: "#fff",
                                                        mt: 1,
                                                        display: "flex",
                                                        justifySelf: "center"
                                                    }}
                                                    onClick={() => toggleExpandRecent(index)}
                                                >
                                                    {expandedRecent === index ? (
                                                        <RemoveOutlined sx={{
                                                            color: "#999",
                                                            fontSize: 15,
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
                                                            fontSize: 15,
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
                                            )}
                                        </CardContent>

                                        <CardContent sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            color: "#999",
                                            alignItems: "center",
                                            paddingTop: 0,
                                            paddingBottom: 0
                                        }}>
                                            <Typography sx={{
                                                fontSize: 13,
                                                fontFamily: "barlow",
                                                fontWeight: 500
                                            }}>
                                                {formattedDateMonthYear(item.createdAt)}
                                            </Typography>

                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center"
                                            }}>


                                                <Button sx={{
                                                    color: "#999",
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    minWidth: 0,
                                                    width: 65,
                                                    height: 35,
                                                    "&:hover": {
                                                        color: "#fff",
                                                        border: "1px solid #fff"
                                                    }
                                                }}>
                                                    <ThumbUpOutlined sx={{
                                                        fontSize: 18
                                                    }} />

                                                    <Typography sx={{
                                                        fontSize: 13,
                                                        fontFamily: "barlow-regular",
                                                        paddingLeft: 1
                                                    }}>
                                                        {item.useFul}
                                                    </Typography>
                                                </Button>

                                                <Button sx={{
                                                    color: "#999",
                                                    border: "1px solid #999",
                                                    borderRadius: 20,
                                                    minWidth: 0,
                                                    width: 45,
                                                    height: 35,
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
                                            </Box>
                                        </CardContent>

                                        <Menu
                                            anchorEl={menuClick}
                                            open={Boolean(menuClick) && selectedIndexRecent === index}
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
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            ) : (
                <Grid2 container spacing={{ sm: 3, md: 4 }} sx={{
                    bgcolor: "#272727",
                    paddingLeft: { lg: 20, md: 4, sm: 2 },
                    paddingRight: { lg: 20, md: 4, sm: 2 },
                    paddingTop: 3
                }}>
                    <Grid2 size={7} sx={{
                        display: bestReview.length ? "block" : "none"
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 20,
                            fontFamily: "barlow-regular",
                            paddingBottom: 2
                        }}>
                            Best reviews
                        </Typography>
                        <Grid2 container spacing={4}>
                            {bestReview.map((item, index) => (
                                <Grid2 size={12}>
                                    <Card sx={{
                                        bgcolor: "#323232",
                                        borderRadius: "10px"
                                    }}
                                        onMouseEnter={() => setHoveredIndexBest(index)}
                                        onMouseLeave={() => setHoveredIndexBest(null)}
                                        key={index}
                                    >
                                        <CardHeader
                                            sx={{
                                                paddingLeft: { sm: 3, md: 4 },
                                                paddingTop: 3,
                                                paddingBottom: { sm: 0, md: 1, lg: 2 }
                                            }}
                                            avatar={
                                                <Avatar src={item.user.avatar} sx={{
                                                    height: { sm: 50, md: 70 },
                                                    width: { sm: 50, md: 70 },
                                                }}></Avatar>
                                            }
                                            subheader={
                                                item.status === "like" ? <ThumbUpOutlined sx={{
                                                    color: "rgb(0, 149, 0)",
                                                    fontSize: 35
                                                }} /> : <ThumbDownOutlined sx={{
                                                    color: "rgb(215, 23, 23)",
                                                    fontSize: 35
                                                }} />
                                            }
                                            action={
                                                <Fade in={{ sm: true, lg: hoveredIndexBest === index }} timeout={200}>
                                                    <IconButton sx={{
                                                        color: "#999",
                                                        "&:hover": {
                                                            color: "#fff",
                                                            bgcolor: "transparent"
                                                        }
                                                    }}
                                                        onClick={(event) => handleClickBest(event, index)}
                                                    >
                                                        <MoreVert />
                                                    </IconButton>
                                                </Fade>
                                                // Nếu ban đầu không muốn phần tử xuất hiện trong DOM sau đó mới render
                                                // Còn nếu muốn có sẵn trong DOM nhưng chỉ ẩn đi thì dùng: transition, opacity, pointerEvents (auto, none) để ngăn click khi chưa hiện
                                            }
                                        />

                                        <CardContent>
                                            <Box sx={{
                                                position: "relative",
                                                maxHeight: expanded === index ? "none" : "7.5rem",
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
                                                    WebkitLineClamp: expanded === index ? "unset" : 5,
                                                    overflow: "hidden",
                                                    transition: "all 0.3s ease-in-out",
                                                    lineHeight: "1.5rem"
                                                }}>
                                                    {item.comment}
                                                </Typography>

                                                {!(expanded === index) && item.comment.length > 300 && (
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            height: "2rem",
                                                            position: "absolute",
                                                            bottom: 0,
                                                            left: 0,
                                                            background: "linear-gradient(to bottom, rgba(50, 50, 50, 0), rgba(50, 50, 50, 1))"
                                                        }}
                                                    />
                                                )}
                                            </Box>

                                            {item.comment.length > 300 && (
                                                <Box
                                                    sx={{
                                                        color: "#fff",
                                                        mt: 1,
                                                        display: "flex",
                                                        justifySelf: "center"
                                                    }}
                                                >
                                                    <Tooltip title={expanded === index ? "Read Less" : "Read More"}
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
                                                        <Box onClick={() => toggleExpand(index)}>
                                                            {expanded === index ? (
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
                                            margin: { sm: 0, md: 2 },
                                            paddingBottom: 0
                                        }}>
                                            <Typography sx={{
                                                fontSize: 16,
                                                fontFamily: "barlow",
                                                fontWeight: 500
                                            }}>
                                                {formattedDateMonthYear(item.createdAt)}
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
                                                            {item.useFul}
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
                                            open={Boolean(menuClick) && selectedIndexBest === index}
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

                    <Grid2 size={bestReview.length ? 5 : 12}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 20,
                            paddingBottom: 2,
                            fontFamily: "barlow-regular"
                        }}>
                            Recent reviews
                        </Typography>

                        <Grid2 container spacing={4}>
                            {recentReview.map((item, index) => (
                                <Grid2 size={bestReview.length ? 12 : 6}>
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
                                                paddingLeft: { sm: 3, md: 4 },
                                                paddingTop: 3,
                                                paddingBottom: { sm: 0, md: 1, lg: 2 }
                                            }}
                                            avatar={
                                                <Avatar src={item.user.avatar} sx={{
                                                    height: { sm: 50, md: 55 },
                                                    width: { sm: 50, md: 55 },
                                                }}></Avatar>
                                            }
                                            subheader={
                                                item.status === "like" ? <ThumbUpOutlined sx={{
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
                                                        onClick={(event) => handleClickRecent(event, index)}
                                                    >
                                                        <MoreVert />
                                                    </IconButton>
                                                </Fade>
                                            }
                                        />

                                        <CardContent>
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
                                                    {item.comment}
                                                </Typography>

                                                {!(expandedRecent === index) && item.comment.length > 300 && (
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

                                            {item.comment.length > 300 && (
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
                                            margin: { sm: 0, md: 2 },
                                            paddingBottom: 0
                                        }}>
                                            <Typography sx={{
                                                fontSize: { sm: 14, md: 16 },
                                                fontFamily: "barlow",
                                                fontWeight: 500
                                            }}>
                                                {formattedDateMonthYear(item.createdAt)}
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
                                                        width: { sm: 65, md: 70 },
                                                        height: { sm: 35, md: 40 },
                                                        "&:hover": {
                                                            color: "#fff",
                                                            border: "1px solid #fff"
                                                        }
                                                    }}>
                                                        <ThumbUpOutlined sx={{
                                                            fontSize: 18
                                                        }} />

                                                        <Typography sx={{
                                                            fontSize: { sm: 14, md: 15 },
                                                            fontFamily: "barlow-regular",
                                                            paddingLeft: 1
                                                        }}>
                                                            {item.useFul}
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
                                                        width: { sm: 45, md: 50 },
                                                        height: { sm: 35, md: 40 },
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
                                            open={Boolean(menuClick) && selectedIndexRecent === index}
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
                </Grid2>
            )}
        </Box>
    )
}

export default UserReviews;