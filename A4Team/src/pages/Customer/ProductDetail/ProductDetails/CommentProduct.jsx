import { FlagOutlined, MoreVert, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Avatar, Card, CardHeader, CardMedia, Grid2, IconButton, Rating, Typography, Box, MenuItem, Menu, useMediaQuery, ImageList, ImageListItem, CardContent } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";
import { getListCommentsByGameIdService } from "../../../../api/commentsService";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


function CommentProduct() {
    const [comment, setComment] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [menuClick, setMenuClick] = useState(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const { id } = useParams();

    const isMobile = useMediaQuery("(max-width:600px)");
    useEffect(() => {
        const fetchComments = async () => {
            const res = await getListCommentsByGameIdService(id);
            if (res.statusCode === 200) {
                setComment(res.data);
                console.log("Fetching commnent by game Id: ", res.data);
            }
            else {
                console.log("Error fetching comment: ", res.errors)
            }
        }
        fetchComments();
    }, []);

    const handleClick = (event, index) => {
        setMenuClick(event.currentTarget);
        setSelectedIndex(index);
    };

    const handleClose = () => {
        setMenuClick(null);
        setSelectedIndex(null);
    };

    const timeAgo = (date) => {
            return dayjs(date).fromNow();
    }

    return (
        <Box>
            {isMobile ? (
                <Box sx={{
                    paddingLeft: 2,
                    paddingRight: 2
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 2,
                        paddingBottom: 1,
                        alignItems: "center"
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 20,
                            fontFamily: "barlow-regular"
                        }}>
                            {comment.length} comments
                        </Typography>

                        <Box>
                            <IconButton sx={{
                                color: "#fff",
                                marginRight: "-6px"
                            }}>
                                <NavigateBefore sx={{
                                    bgcolor: "#272727",
                                    borderRadius: 20,
                                    padding: 0.5,
                                    fontSize: 25,
                                    border: "0.5px solid #fff"
                                }} />
                            </IconButton>

                            <IconButton sx={{
                                color: "#fff"
                            }}>
                                <NavigateNext sx={{
                                    bgcolor: "#272727",
                                    borderRadius: 20,
                                    padding: 0.5,
                                    fontSize: 25,
                                    border: "0.5px solid #fff"
                                }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <ImageList sx={{
                        flexWrap: "nowrap",
                        overflowX: "scroll",
                        display: "flex",
                        flexDirection: "row"
                    }} gap={20}>
                        {comment.map((item, index) => (
                            <ImageListItem sx={{
                                width: "180px"
                            }} key={index}>
                                <Card sx={{
                                    height: "100%",
                                    bgcolor: "#323232",
                                    borderRadius: "5px",
                                    position: "relative",
                                    width: "180px"
                                }}
                                    key={index}
                                >
                                    <CardHeader
                                        action={
                                            <IconButton sx={{
                                                color: "#999",
                                                position: "absolute",
                                                top: 5,
                                                right: 5
                                            }}
                                                onClick={(event) => handleClick(event, index)}
                                            >
                                                <MoreVert />
                                            </IconButton>
                                        }
                                    />

                                    <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            marginBottom: 1
                                        }}>
                                            <Avatar src={item.user.avatar} sx={{
                                                height: 50,
                                                width: 50,
                                                justifySelf: "center",
                                                marginBottom: 1
                                            }}></Avatar>

                                            <Rating
                                                value={item.rating}
                                                readOnly
                                                precision={0.5}
                                                sx={{
                                                    fontSize: 15
                                                }}
                                                emptyIcon={<StarIcon sx={{ color: "white", fontSize: 15 }} />}
                                            />
                                        </Box>
                                    </CardContent>

                                    <CardMedia>
                                        <Typography sx={{
                                            color: "#999",
                                            fontFamily: "barlow-regular",
                                            fontSize: 15,
                                            paddingLeft: 2,
                                            paddingRight: 2,
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 3,
                                            lineHeight: "1.5rem",
                                            height: "4.5rem"
                                        }}>
                                            {item.comment}
                                        </Typography>
                                    </CardMedia>

                                    <CardMedia>
                                        <Typography sx={{
                                            color: "#fff",
                                            fontSize: 12,
                                            fontFamily: "barlow-regular",
                                            padding: 2
                                        }}>
                                            {timeAgo(item.createAt)}
                                        </Typography>
                                    </CardMedia>

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
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            ) : (
                <Box sx={{
                    paddingLeft: { lg: 20, md: 4, sm: 2 },
                    paddingRight: { lg: 20, md: 4, sm: 2 },
                    bgcolor: "#272727"
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 2,
                        paddingBottom: 2
                    }}>
                        <Typography sx={{
                            color: "#fff",
                            fontSize: 32,
                            fontFamily: "barlow-regular"
                        }}>
                            {comment.length} comments
                        </Typography>

                        <Box>
                            <IconButton sx={{
                                color: "#fff",
                                marginRight: "-6px"
                            }}>
                                <NavigateBefore sx={{
                                    bgcolor: "#272727",
                                    borderRadius: 20,
                                    padding: 0.5,
                                    fontSize: 30,
                                    border: "0.5px solid #fff"
                                }} />
                            </IconButton>

                            <IconButton sx={{
                                color: "#fff"
                            }}>
                                <NavigateNext sx={{
                                    bgcolor: "#272727",
                                    borderRadius: 20,
                                    padding: 0.5,
                                    fontSize: 30,
                                    border: "0.5px solid #fff"
                                }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Grid2 container justifyContent="center" spacing={4}>
                        {comment.map((item, index) => (
                            <Grid2 size={4}>
                                <Card sx={{
                                    height: "100%",
                                    bgcolor: "#323232",
                                    borderRadius: "5px",
                                    position: "relative"
                                }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    key={index}
                                >
                                    <CardHeader
                                        avatar={
                                            <Avatar src={item.user.avatar} sx={{
                                                height: 50,
                                                width: 50
                                            }}></Avatar>
                                        }
                                        subheader={
                                            <Rating
                                                defaultValue={item.rating}
                                                precision={0.5}
                                                readOnly
                                                sx={{
                                                    fontSize: 20
                                                }}
                                                emptyIcon={<StarIcon sx={{ color: "#fff", fontSize: 20 }} />}
                                            />
                                        }
                                    />

                                    {hoveredIndex === index && (
                                        <IconButton sx={{
                                            color: "white",
                                            position: "absolute",
                                            top: 10,
                                            right: 10
                                        }}
                                            onClick={(event) => handleClick(event, index)}
                                        >
                                            <MoreVert />
                                        </IconButton>
                                    )}

                                    <CardMedia>
                                        <Typography sx={{
                                            color: "#999",
                                            fontFamily: "barlow-regular",
                                            fontSize: 15,
                                            paddingLeft: 2,
                                            paddingRight: 2,
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: { sm: 1, md: 3 },
                                            lineHeight: "1.5rem",
                                            height: { sm: "1.5rem", md: "4.5rem" }
                                        }}>
                                            {item.comment}
                                        </Typography>
                                    </CardMedia>

                                    <CardMedia>
                                        <Typography sx={{
                                            color: "#fff",
                                            fontSize: 12,
                                            fontFamily: "barlow-regular",
                                            padding: 2
                                        }}>
                                            {timeAgo(item.createAt)}
                                        </Typography>
                                    </CardMedia>

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
                </Box>
            )}
        </Box>
    )
}

export default CommentProduct;