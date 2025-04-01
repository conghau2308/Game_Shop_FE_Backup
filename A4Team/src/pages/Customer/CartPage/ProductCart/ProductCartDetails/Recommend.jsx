import { ArrowUpward } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";


function Recommend() {
    const [product, setProduct] = useState([]);

    const [hoverArrow, setHoverArrow] = useState(null);

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/products/6866/616x353/human-fall-flat-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1736958653",
                name: "Human: Fall Flat",
                "Game console": "PlayStation",
                price_sale: 30.1
            },
            {
                image: "https://gaming-cdn.com/images/products/6866/616x353/human-fall-flat-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1736958653",
                name: "Human: Fall Flat",
                "Game console": "PlayStation",
                price_sale: 30.1
            },
            {
                image: "https://gaming-cdn.com/images/products/6866/616x353/human-fall-flat-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1736958653",
                name: "Human: Fall Flat",
                "Game console": "PlayStation",
                price_sale: 30.1
            }
        ];
        setProduct(fakedata);
    }, [])

    return (
        <Box>
            <Typography sx={{
                color: "#fff",
                fontFamily: "barlow-regular",
                fontSize: { xs: 18, md: 22 }
            }}>
                Recommended
            </Typography>
            {product.map((item, index) => (
                <Grid2 container sx={{
                    paddingTop: { xs: 2, md: 3 },
                    paddingBottom: { xs: 2, md: 3 },
                    borderBottom: "1px solid rgb(89, 89, 89)",
                    ':last-child': {
                        borderBottom: "none"
                    }
                }} spacing={{ xs: 1, sm: 3 }}>
                    <Grid2 size={{ xs: 3, sm: 4, md: 3 }}>
                        <Card sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: '#272727',
                            boxShadow: "none",
                            borderRadius: "5px"
                        }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                sx={{
                                    width: { xs: "90px", sm: "130px", lg: "150px" },
                                    height: "auto",
                                    objectFit: "cover",
                                    borderRadius: '5px'
                                }}
                            />
                        </Card>
                    </Grid2>

                    <Grid2 size={{ xs: 5, md: 6 }} sx={{
                        color: "#fff",
                        alignContent: 'center'
                    }}>
                        <Typography sx={{
                            fontFamily: "barlow-regular",
                            fontSize: { xs: 13, sm: 14, md: 16 },
                            display: "-webkit-box",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 1,
                            lineHeight: "1.5rem",
                            height: "1.5rem",
                        }}>
                            {item.name}
                        </Typography>

                        <Typography sx={{
                            fontFamily: "barlow",
                            fontWeight: 600,
                            fontSize: { xs: 12, md: 13 },
                            color: "#999"
                        }}>
                            {item["Game console"]}
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: 14, md: 16 },
                            fontFamily: "barlow-regular",
                            paddingTop: { xs: 0, sm: 1 }
                        }}>
                            {item.price_sale} $
                        </Typography>
                    </Grid2>

                    <Grid2 size={{ xs: 4, sm: 3 }} sx={{
                        alignContent: 'center',
                        color: '#999',
                        justifyItems: "right"
                    }}>
                        <Box sx={{
                            display: "flex",
                            alignItems: 'center',
                            cursor: "pointer",
                            ':hover': {
                                transition: "color 0.2s ease-in-out",
                                color: '#fff'
                            }
                        }}
                            onMouseEnter={() => setHoverArrow(index)}
                            onMouseLeave={() => setHoverArrow(null)}
                        >
                            <Typography sx={{
                                fontSize: { xs: 12, md: 13 },
                                fontFamily: 'barlow',
                                fontWeight: 600
                            }}>
                                Move to cart
                            </Typography>

                            <ArrowUpward sx={{
                                fontSize: 16,
                                paddingLeft: 0.7,
                                transition: "transform 0.2s ease-in-out",
                                transform: hoverArrow === index ? "translateY(-4px)" : "none"
                            }} />
                        </Box>
                    </Grid2>
                </Grid2>
            ))}
        </Box>
    )
}

export default Recommend;