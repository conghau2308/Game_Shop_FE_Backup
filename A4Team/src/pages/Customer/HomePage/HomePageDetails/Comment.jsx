import { FlagOutlined, MoreVert } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton, Box, Rating, Typography, CardContent, Menu, MenuItem, Grid2, CardActionArea, useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import { getLimitedCommentsService } from "../../../../api/commentsService";
import relativeTime from "dayjs/plugin/relativeTime";
import MobileSkeleton from "../../../../components/Customer/Skeleton/mobile";
import NotMobileSkeleton from "../../../../components/Customer/Skeleton/notMobile";
import { useStoreAlert } from "../../../../hooks/alert";
import { timeAgo } from "../../../../ultils/time";

function Comment() {
    const [menuClick, setMenuClick] = useState(null);
    const [cmt, setCmt] = useState([]);

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const isSmallMedia = useMediaQuery("(max-width:900px)");
    const isMobile = useMediaQuery("(max-width:600px)");

    const {callErrorAlert} = useStoreAlert();

    const handleClick = (event, index) => {
        setMenuClick(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setMenuClick(null);
        setSelectedIndex(null);
    };

    useEffect(() => {
        const fetchComments = async () => {
            const response = await getLimitedCommentsService(8);
            if (response.statusCode === 200) {
                setCmt(response.data);
                // console.log("Comment Data: ", response.data);
            }
            else {
                console.log("Error fetching comments: ", response.errors);
                // callErrorAlert("Failed to load gamer's comments. Please try again later.");
            }
        }
        fetchComments();
    }, [])
    

    return (
        <Box sx={{
            padding: "40px 0 40px 0"
        }}>
            {isMobile ? (
                <Box sx={{
                    padding: "0 20px 0 20px"
                }}>
                    <Typography sx={{
                        color: "white",
                        fontSize: 20,
                        fontFamily: "barlow",
                        fontWeight: "bold"
                    }}>
                        User Feedbacks
                    </Typography>
                    {cmt.length > 0 ? (
                        <ImageList sx={{
                            flexWrap: "nowrap",
                            overflowX: "scroll",
                            display: "flex",
                            flexDirection: "row"
                        }} gap={20}>
                            {cmt.map((com, index) => (
                                <ImageListItem sx={{
                                    width: "60%"
                                }} key={index}>
                                    <Card sx={{
                                        bgcolor: "#3d3d3d",
                                        borderRadius: "10px",
                                        position: "relative"
                                    }}>
                                        <CardHeader
                                            action={
                                                <IconButton sx={{
                                                    position: "absolute",
                                                    top: 5,
                                                    right: 5,
                                                    color: "white",
                                                }}
                                                    onClick={(event) => handleClick(event, index)}
                                                >
                                                    <MoreVert />
                                                </IconButton>
                                            }
                                            sx={{
                                                paddingTop: 0
                                            }}
                                        />

                                        <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                            <Box sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                            }}>
                                                <Avatar src={com.user.avatar} sx={{
                                                    height: 50,
                                                    width: 50,
                                                    justifySelf: "center"
                                                }}></Avatar>

                                                <Rating
                                                    value={com.rating}
                                                    readOnly
                                                    precision={0.5}
                                                    emptyIcon={<StarIcon sx={{ color: "white" }} />}
                                                />

                                                <Typography sx={{
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap",
                                                    color: "white",
                                                    width: "90%"
                                                }}>
                                                    {com.game.name}
                                                </Typography>
                                            </Box>
                                        </CardContent>

                                        <CardContent sx={{ paddingTop: 1, paddingBottom: 0 }}>
                                            <Typography sx={{
                                                display: "-webkit-box",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 2,
                                                lineHeight: "1.5rem",
                                                height: "3rem",
                                                color: "#999",
                                                fontSize: 14,
                                                fontFamily: "barlow",
                                                fontWeight: "bold"
                                            }}>
                                                {com.comment}
                                            </Typography>
                                        </CardContent>

                                        <CardContent>
                                            <Typography sx={{
                                                fontSize: 15,
                                                color: "white",
                                                fontFamily: "barlow",
                                                fontWeight: "bold"
                                            }}>
                                                {timeAgo(com.createdAt)}
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
                cmt.length > 0 ? (
                    <Grid2 container justifyContent="space-evenly">
                    {(isSmallMedia ? cmt.slice(0, 4) : cmt.slice(0, 5)).map((com, index) => (
                        <Grid2 key={index} size={{ sm: 2.7, md: 2  }}>
                            <Card sx={{
                                bgcolor: "#3d3d3d",
                                borderRadius: "10px",
                                position: "relative"
                            }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar src={com.user.avatar} sx={{
                                            width: { lg: 50 },
                                            height: { lg: 50 }
                                        }}></Avatar>
                                    }

                                    subheader={
                                        <Box sx={{
                                            width: { lg: "50%", md: "30%", sm: "30%" }
                                        }}>
                                            <Rating
                                                value={com.rating}
                                                readOnly
                                                precision={0.5}
                                                icon={<StarIcon sx={{ fontSize: { lg: 20, md: 13, sm: 13 } }} />}
                                                emptyIcon={<StarIcon sx={{ fontSize: { lg: 20, md: 13, sm: 13 }, color: "white" }} />}
                                            />

                                            <Typography sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                color: "white",
                                                fontSize: { lg: 14, md: 13, sm: 14 },
                                                fontFamily: "barlow",
                                                fontWeight: "bold"
                                            }}>
                                                {com.game.name}
                                            </Typography>
                                        </Box>
                                    }
                                />

                                {hoveredIndex === index && (
                                    <IconButton
                                        onClick={(event) => handleClick(event, index)}
                                        sx={{
                                            position: "absolute",
                                            top: { lg: 10, md: 0, sm: 0 },
                                            right: { lg: 10, md: 0, sm: 0 },
                                            color: "white",

                                        }}
                                    >
                                        <MoreVert />
                                    </IconButton>
                                )}

                                <CardContent sx={{
                                    paddingTop: 0,
                                    paddingBottom: 0
                                }}>
                                    <Typography sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 2,
                                        lineHeight: "1.5rem",
                                        height: "3rem",
                                        color: "#999",
                                        fontSize: { lg: 14 },
                                        fontFamily: "barlow",
                                        fontWeight: "bold"
                                    }}>
                                        {com.comment}
                                    </Typography>
                                </CardContent>

                                <CardContent>
                                    <Typography sx={{
                                        color: "white",
                                        fontSize: { lg: 12, md: 12, sm: 10 },
                                        fontFamily: "barlow",
                                        fontWeight: "bold"
                                    }}>
                                        {timeAgo(com.createdAt)}
                                    </Typography>
                                </CardContent>

                                <Menu
                                    anchorEl={menuClick}
                                    open={Boolean(menuClick) && selectedIndex === index} // Chỉ mở menu của comment được chọn
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
                ) : (
                    <NotMobileSkeleton number={isSmallMedia ? 4 : 5} size={{ sm: 2.95, md: 2.3}} />
                )
            )}
        </Box>
    )
}

export default Comment;