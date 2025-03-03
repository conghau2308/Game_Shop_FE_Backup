import { Grid2, Box, Card, CardMedia, CardContent, Typography, CardActionArea, useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";


function Indies() {
    const [indie, setIndie] = useState([]);
    const isMobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const fakedata = [
            {
                name: "Metal Slug Tactics",
                description: "Metal Slug Tactics offers a fresh perspective on the iconic battles of the METAL SLUG series. Lead your squad to victory through strategic guile and superior firepower in a perfect blend of classic action and tactical depth. Unleash powerful special attacks and shape the outcome of each encounter! Accumulate experience after each battle to unlock new weapons or bonus perks to upgrade your team's firepower and tactical skills. Assemble your team and rewrite the rules in this modern tribute to a cult classic!",
                image: "https://gaming-cdn.com/img/products/9050/pcover/1400x500/9050.jpg?v=1730910392"
            },
            {
                name: "The Jackbox Survey Scramble",
                description: "Metal Slug Tactics offers a fresh perspective on the iconic battles of the METAL SLUG series. Lead your squad to victory through strategic guile and superior firepower in a perfect blend of classic action and tactical depth. Unleash powerful special attacks and shape the outcome of each encounter! Accumulate experience after each battle to unlock new weapons or bonus perks to upgrade your team's firepower and tactical skills. Assemble your team and rewrite the rules in this modern tribute to a cult classic!",
                image: "https://gaming-cdn.com/images/products/17940/616x353/the-jackbox-survey-scramble-pc-mac-game-steam-cover.jpg?v=1730307058"
            },
            {
                name: "Metal Slug Tactics",
                description: "Metal Slug Tactics offers a fresh perspective on the iconic battles of the METAL SLUG series. Lead your squad to victory through strategic guile and superior firepower in a perfect blend of classic action and tactical depth. Unleash powerful special attacks and shape the outcome of each encounter! Accumulate experience after each battle to unlock new weapons or bonus perks to upgrade your team's firepower and tactical skills. Assemble your team and rewrite the rules in this modern tribute to a cult classic!",
                image: "https://gaming-cdn.com/img/products/9050/pcover/1400x500/9050.jpg?v=1730910392"
            },
            {
                name: "Metal Slug Tactics",
                description: "Metal Slug Tactics offers a fresh perspective on the iconic battles of the METAL SLUG series. Lead your squad to victory through strategic guile and superior firepower in a perfect blend of classic action and tactical depth. Unleash powerful special attacks and shape the outcome of each encounter! Accumulate experience after each battle to unlock new weapons or bonus perks to upgrade your team's firepower and tactical skills. Assemble your team and rewrite the rules in this modern tribute to a cult classic!",
                image: "https://gaming-cdn.com/images/products/17940/616x353/the-jackbox-survey-scramble-pc-mac-game-steam-cover.jpg?v=1730307058"
            }
        ];
        setIndie(fakedata);
    }, []);

    return (
        <Box>
            {isMobile ? (
                <Box sx={{
                    paddingLeft: 2,
                    paddingRight: 2
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        fontFamily: "barlow-regular",
                        color: "white"
                    }}>
                        Top indie games
                    </Typography>
                    <ImageList sx={{
                        flexWrap: "nowrap",
                        overflowX: "scroll",
                        display: "flex",
                        flexDirection: "row",
                    }} gap={20}>
                        {indie.map((product, index) => (
                            <ImageListItem key={index} >
                                <Card sx={{ borderRadius: "10px", bgcolor: "#3d3d3d", height: "100%", width: "300px",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    }
                                 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            sx={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </CardActionArea>

                                    <CardContent>
                                        <Typography sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            color: "white",
                                            fontSize: 18,
                                            fontFamily: "barlow-regular"
                                        }}>
                                            {product.name}
                                        </Typography>

                                        <Typography sx={{
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 1,
                                            lineHeight: "1.5rem",
                                            height: "1.5rem",
                                            fontSize: 16,
                                            color: "#999",
                                            fontFamily: "barlow-regular"
                                        }}>
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            ) : (
                <Grid2 container justifyContent="center" sx={{
                    backgroundImage: "linear-gradient(80deg, rgba(50, 50, 50, .4), #323232 35%), url(https://www.instant-gaming.com/themes/igv2/modules/productsIndiesPanel/images/deadcells.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    padding: { md: "3% 8% 3% 8%", sm: "3% 5% 3% 5%" },
                }} spacing={1}>
                    <Grid2 size={{ lg: 4, md: 5, sm: 4 }} alignContent="center">
                        <img
                            src="https://www.instant-gaming.com/themes/igv2/modules/productsIndiesPanel/images/beheaded.png"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                alignSelf: "center"
                            }}
                        />
                    </Grid2>

                    <Grid2 size={{ lg: 8, md: 7, sm: 8 }}>
                        <Typography sx={{
                            fontSize: { md: 32, sm: 25 },
                            fontFamily: "barlow-regular",
                            color: "white",
                            paddingBottom: { xs: 1, sm: 3 }
                        }}>
                            Top indie games
                        </Typography>
                        <Grid2 container justifyContent="center" spacing={{ lg: 4, md: 4, sm: 3 }}>
                            {indie.map((game, index) => (
                                <Grid2 key={index} size={{ lg: 6, md: 6, sm: 6 }}>
                                    <Card sx={{ borderRadius: "10px", bgcolor: "#3d3d3d", width: "100%", height: "auto",
                                        transition: "transform 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.05)"
                                        }
                                     }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={game.image}
                                                loading="lazy"
                                                sx={{
                                                    width: "100%",
                                                    height: { lg: "200px", md: "120px", sm: "100px" },
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </CardActionArea>

                                        <CardContent>
                                            <Typography sx={{
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                color: "white",
                                                fontSize: { sm: 12, md: 14, lg: 18 },
                                                fontFamily: "barlow-regular"
                                            }}>
                                                {game.name}
                                            </Typography>

                                            <Typography sx={{
                                                display: "-webkit-box",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: { sm: 1, md: 2 },
                                                lineHeight: "1.5rem",
                                                height: { sm: "1.5rem", md: "3rem" },
                                                fontSize: { sm: 10, md: 12, lg: 14 },
                                                color: "#999",
                                                fontFamily: "barlow-regular"
                                            }}>
                                                {game.description}
                                            </Typography>
                                        </CardContent>
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

export default Indies;