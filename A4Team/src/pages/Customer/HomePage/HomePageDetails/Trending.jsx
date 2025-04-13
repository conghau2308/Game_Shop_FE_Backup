import { Button, Card, CardContent, Typography, Box, CardMedia, Grid2, CardActionArea, useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useNavigateProductDetail from "../../../../ultils/NavigateProductDetail";
import { getLimitedGameService } from "../../../../api/gameListService";
import { getLimitedGameWithPriceService } from "../../../../api/gameWithPriceService";

function Trending() {
    const [trending, setTrending] = useState([]);
    const isMobile = useMediaQuery("(max-width:600px)");
    const isMedium = useMediaQuery("(max-width:1200px");
    const navigate = useNavigate();

    const handleProductDetail = useNavigateProductDetail();

    useEffect(() => {
        const fetchGames = async () => {
            const res = await getLimitedGameWithPriceService(8);
            if (res?.statusCode === 200) {
                setTrending(res.data)
            }
            else {
                console.log("Error fetching games:", res.errors)
            }
        }
        fetchGames();
    }, []);

    return (
        <Box sx={{
            paddingLeft: { xs: 2, sm: 2, md: 4, lg: 20 },
            paddingRight: { xs: 2, sm: 2, md: 4, lg: 20 },
            maxWidth: { xs: "100vw" },
            margin: "10px 0 10px 0"
        }}>
            <Typography sx={{
                fontSize: { xs: 20, md: 32, sm: 25 },
                fontFamily: "barlow-regular",
                paddingBottom: { xs: 1, sm: 3 },
                color: "white",
            }}>
                Trending
            </Typography>

            {isMobile ? (
                <ImageList sx={{
                    flexWrap: "nowrap",
                    overflowX: "scroll",
                    display: "flex",
                    flexDirection: "row"
                }} gap={20}>
                    {trending.map((product) => (
                        <ImageListItem key={product.id} >
                            <Card sx={{
                                borderRadius: "10px", bgcolor: "#3d3d3d", height: "100%", width: "300px",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}>
                                <CardActionArea onClick={() => handleProductDetail(product)}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "cover",
                                        }}
                                    />

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

                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <Typography sx={{
                                                bgcolor: "#ff5400",
                                                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%, 0 100%)",
                                                paddingLeft: 1.5,
                                                paddingRight: 1.5,
                                                borderRadius: "5px",
                                                fontSize: 18,
                                                color: "white",
                                                fontFamily: "barlow-regular"
                                            }}>
                                                -{product.discount_percent}%
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: 21,
                                                fontFamily: "barlow-regular",
                                                color: "white"
                                            }}>
                                                {product.final_price}$
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (

                <Grid2 container spacing={4} justifyContent="center">
                    {(isMedium ? trending.slice(0, 6) : trending).map((product) => (
                        <Grid2 size={{
                            xs: 6, sm: 4, md: 4
                        }} key={product.id}>
                            <Card sx={{
                                borderRadius: "10px", bgcolor: "#3d3d3d",
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}>
                                <CardActionArea onClick={() => handleProductDetail(product)}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
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
                                        fontSize: { sm: 14, md: 18 },
                                        fontFamily: "barlow-regular"
                                    }}>
                                        {product.name}
                                    </Typography>

                                    <Typography sx={{
                                        display: "-webkit-box",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: { sm: 1, md: 2 },
                                        lineHeight: "1.5rem",
                                        height: { sm: "1.5rem", md: "3rem" },
                                        fontSize: { sm: 12, md: 14 },
                                        color: "#999",
                                        fontFamily: "barlow-regular"
                                    }}>
                                        {product.description}
                                    </Typography>

                                    <Grid2 container justifyContent="space-between" alignItems="center" display="flex">
                                        <Grid2>
                                            <Typography sx={{
                                                bgcolor: "#ff5400",
                                                clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%, 0 100%)",
                                                paddingLeft: 1.5,
                                                paddingRight: 1.5,
                                                borderRadius: "5px",
                                                fontSize: { sm: 14, md: 18 },
                                                color: "white",
                                                fontFamily: "barlow",
                                                fontWeight: "bold"
                                            }}>
                                                -{product.discount_percent}%
                                            </Typography>
                                        </Grid2>

                                        <Grid2>
                                            <Typography sx={{
                                                fontSize: { sm: 18, md: 23 },
                                                fontFamily: "barlow",
                                                color: "white",
                                                fontWeight: "bold"
                                            }}>
                                                {product.final_price}$
                                            </Typography>
                                        </Grid2>
                                    </Grid2>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            )
            }
        </Box>
    )
}

export default Trending;