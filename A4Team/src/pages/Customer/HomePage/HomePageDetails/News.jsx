import { CardMedia, Typography, Box, Card, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

function Newss() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/news/articles/10623/cover/1000x563/steam-will-ban-games-that-force-players-to-watch-ads-cover67a9de21b3622.jpg",
                time: "2 hours ago",
                title: "Steam will ban games that force players to watch ads",
                content: "Valve recently updated its Steam policy on advertising content in video games. Certain practices are allowed, while others are prohibited. If you want to see your game on its platform, you'll need to respect these conditions. According to Valve, there's no problem with real-world product placements, paid ads outside Steam and cross-promotions (such as bundles or promotional events)"
            },
            {
                image: "https://gaming-cdn.com/images/news/articles/10625/cover/1000x563/the-golden-sun-soundtrack-is-now-available-on-nintendo-music-cover67a9fc827ab16.jpg",
                time: "20 minute ago",
                title: "The Golden Sun soundtrack is now available on Nintendo music",
                content: "Valve recently updated its Steam policy on advertising content in video games. Certain practices are allowed, while others are prohibited. If you want to see your game on its platform, you'll need to respect these conditions. According to Valve, there's no problem with real-world product placements, paid ads outside Steam and cross-promotions (such as bundles or promotional events)"
            },
            {
                image: "https://gaming-cdn.com/images/news/articles/10624/cover/1000x563/this-week-s-releases-from-february-10-to-16-2025-cover67a9ec7a18da5.jpg",
                time: "2 hours ago",
                title: "This week's releases: from February 10 to 16, 2025",
                content: "It's another busy week, with the arrival of Civilization VII and the return of Lara Croft. Other extremely promising games have also found their way into our weekly releases. Mayhemers February 10, 2025 on PC (early access) We start with a good dose of mayhem in this title playable by up to eight players"
            }
        ];
        setNews(fakedata);
    }, [])

    return (
        <Box sx={{
            paddingTop: 5,
            bgcolor: "#272727"
        }}>
            <Typography sx={{
                color: "white",
                fontSize: {xs: 20, md: 32, sm: 25},
                fontFamily: "barlow-regular",
                paddingLeft: {xs: 2, sm: 2, md: 4, lg: 20},
                paddingBottom: 0
            }}>
                News not to be missed
            </Typography>
            <Grid2 container spacing={5} justifyContent="center" padding={{md: 5, sm: 2, xs: 2}}>
                {news.map((item, index) => (
                    <Grid2 container key={index} spacing={{xs: 2, sm: 3}} justifyContent="center" alignItems="center" sx={{
                        paddingLeft: {lg: 15},
                        paddingRight: {lg: 15},
                        cursor: "pointer"
                    }}>
                        <Grid2 size={{xs: 5, sm: 3}} key={index}>
                            <Card sx={{
                                borderRadius: "5px"
                            }}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    sx={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover"
                                    }}
                                />
                            </Card>
                        </Grid2>

                        <Grid2 size={{xs: 7, sm: 9}}>
                            <Typography sx={{
                                color: "#999",
                                fontSize: {lg: 15, xs: 10},
                                fontFamily: "barlow-regular",
                            }}>
                                {item.time}
                            </Typography>

                            <Typography sx={{
                                fontSize: {lg: 18, xs: 13},
                                color: "white",
                                fontFamily: "barlow-regular",
                                "&:hover": {
                                    textDecoration: "underline"
                                },
                                display: {xs: "-webkit-box"},
                                overflow: {xs: "hidden"},
                                textOverflow: {xs: "ellipsis"},
                                WebkitLineClamp: {xs: 2},
                                WebkitBoxOrient: {xs: "vertical"},
                                lineHeight: {xs: "1.5rem"},
                                height: {xs: "3rem"},
                            }}>
                                {item.title}
                            </Typography>

                            <Typography sx={{
                                display: {xs: "none", sm: "-webkit-box"},
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                lineHeight: "1.5rem",
                                height: "3rem",
                                fontSize: {lg: 15},
                                color: "#999",
                                fontFamily: "barlow-regular",
                            }}>
                                {item.content}
                            </Typography>
                        </Grid2>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}

export default Newss;