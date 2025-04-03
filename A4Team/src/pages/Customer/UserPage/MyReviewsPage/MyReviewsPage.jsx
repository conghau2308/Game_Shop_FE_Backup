import { AddOutlined, RemoveOutlined, ThumbDownOutlined, ThumbUpOutlined, InfoOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";


function MyReviewsPage() {
    const [reviews, setReviews] = useState([]);

    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        const fakedata = [
            {
                name: "Age of Empires IV: Knights of Cross and Rose ",
                image: "https://gaming-cdn.com/images/products/18964/616x353/age-of-empires-iv-knights-of-cross-and-rose-pc-game-steam-cover.jpg?v=1743502176",
                like: true,
                review: "This game might just be the best Assassin's Creed we've had in 10 years, the game is not perfect, but it looks astonishing and the story is very well done, this is a must play game. I'm very happy Ubisoft did what they've done with this game, I hope that they manage to make stuff like this again in the future, I hope that they'll keep cooking like this.",
                time: "27th March 2025"
            },
            {
                name: "Age of Empires IV: Knights of Cross and Rose ",
                image: "https://gaming-cdn.com/images/products/18964/616x353/age-of-empires-iv-knights-of-cross-and-rose-pc-game-steam-cover.jpg?v=1743502176",
                like: true,
                review: "This game might just be the best Assassin's Creed we've had in 10 years, the game is not perfect, but it looks astonishing and the story is very well done, this is a must play game. I'm very happy Ubisoft did what they've done with this game, I hope that they manage to make stuff like this again in the future, I hope that they'll keep cooking like this.",
                time: "27th March 2025"
            },
            {
                name: "Age of Empires IV: Knights of Cross and Rose ",
                image: "https://gaming-cdn.com/images/products/18964/616x353/age-of-empires-iv-knights-of-cross-and-rose-pc-game-steam-cover.jpg?v=1743502176",
                like: true,
                review: "This game might just be the best Assassin's Creed we've had in 10 years, the game is not perfect, but it looks astonishing and the story is very well done, this is a must play game. I'm very happy Ubisoft did what they've done with this game, I hope that they manage to make stuff like this again in the future, I hope that they'll keep cooking like this.",
                time: "27th March 2025"
            },
            {
                name: "Age of Empires IV: Knights of Cross and Rose ",
                image: "https://gaming-cdn.com/images/products/18964/616x353/age-of-empires-iv-knights-of-cross-and-rose-pc-game-steam-cover.jpg?v=1743502176",
                like: true,
                review: "This game might just be the best Assassin's Creed we've had in 10 years, the game is not perfect, but it looks astonishing and the story is very well done, this is a must play game. I'm very happy Ubisoft did what they've done with this game, I hope that they manage to make stuff like this again in the future, I hope that they'll keep cooking like this.",
                time: "27th March 2025"
            }
        ];
        setReviews(fakedata)
    }, [])

    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    return (
        <Box>
            <Typography sx={{
                fontFamily: 'barlow-regular',
                fontSize: { sm: 23, md: 25 },
                color: '#fff',
                marginBottom: { xs: 3, sm: 5 }
            }}>
                My Reviews
            </Typography>

            <Box sx={{
                marginBottom: 5
            }}>
                <Grid2 container justifyContent='center' spacing={{ xs: 2, sm: 5, md: 3 }}>
                    {reviews.length > 0 ? (reviews.map((item, index) => (
                        <Grid2 size={{ xs: 11, sm: 6, md: 4 }} key={index}>
                            <Card sx={{
                                bgcolor: "#323232",
                                color: "#999",
                                borderRadius: '10px'
                            }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    sx={{
                                        width: "100%",
                                        height: { xs: '150px', sm: '130px', md: '150px', lg: '200px' },
                                        objectFit: 'cover'
                                    }}
                                />

                                <CardContent sx={{
                                    justifyItems: 'center'
                                }}>
                                    <Typography sx={{
                                        color: "#fff",
                                        fontFamily: 'barlow-regular',
                                        fontSize: { xs: 15, md: 18 },
                                        textAlign: 'center'
                                    }}>
                                        {item.name}
                                    </Typography>
                                </CardContent>

                                <CardContent sx={{
                                    paddingBottom: 0,
                                    paddingTop: 0,
                                    maxHeight: expanded[index] ? 'none' : { xs: '5.2rem', md: '6rem' },
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: { xs: 13, md: 15 },
                                        WebkitLineClamp: expanded[index] ? "unset" : 4,
                                        overflow: "hidden",
                                        transition: "all 0.3s ease-in-out",
                                        lineHeight: { xs: '1.3rem', md: '1.5rem' }
                                    }}>
                                        {item.review}
                                    </Typography>

                                    {item.review.length > 50 && !expanded[index] && (
                                        <Box
                                            sx={{
                                                width: '100%',
                                                height: "2rem",
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                background: "linear-gradient(to bottom, rgba(29, 29, 29, 0) 10%, #323232 90%)"
                                            }}
                                        />
                                    )}
                                </CardContent>

                                {item.review.length > 50 && (
                                    <Box
                                        sx={{
                                            color: "#fff",
                                            mt: 1,
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        {expanded[index] ? (
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

                                <CardContent sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginLeft: 1,
                                    marginRight: 1
                                }}>
                                    <Typography sx={{
                                        fontFamily: 'barlow',
                                        fontWeight: 600,
                                        fontSize: { xs: 12, md: 14 }
                                    }}>
                                        {item.time}
                                    </Typography>

                                    <Box sx={{
                                        border: item.like ? '1px solid rgb(0, 149, 0)' : '1px solid rgb(215, 23, 23)',
                                        padding: 1,
                                        borderRadius: 50
                                    }}>
                                        {item.like ? <ThumbUpOutlined sx={{
                                            color: 'rgb(0, 149, 0)',
                                            fontSize: { xs: 20, md: 28 }
                                        }} /> : <ThumbDownOutlined sx={{
                                            fontSize: { xs: 20, md: 28 },
                                            color: 'rgb(215, 23, 23)'
                                        }} />}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))) : (
                        <Box sx={{
                            justifyItems: 'center',
                            marginTop: 5, marginBottom: 5
                        }}>
                            <Box sx={{
                                bgcolor: 'rgb(0, 50, 66)',
                                color: 'rgb(34, 200, 255)',
                                display: 'flex',
                                width: { xs: '350px', sm: '600px' },
                                justifyContent: 'center',
                                padding: 1.5,
                                borderRadius: '10px'
                            }}>
                                <InfoOutlined sx={{
                                    fontSize: { xs: 20, sm: 25 }
                                }} />
                                <Typography sx={{
                                    fontFamily: 'barlow',
                                    fontWeight: 600,
                                    fontSize: { xs: 13, sm: 16 },
                                    textAlign: 'center'
                                }}>
                                    You didn't post any game review so far. Help the other gamers by sharing your thoughts!
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Grid2>
            </Box>
        </Box>
    )
}

export default MyReviewsPage;