import { ArrowUpward } from "@mui/icons-material";
import { Box, Card, CardMedia, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getLimitedGameWithPriceService } from "../../../../../api/gameWithPriceService";
import { getGamesWithPlatformByGameIdService } from "../../../../../api/gameListService";
import { useStoreAlert } from "../../../../../hooks/alert";
import useStoreCart from "../../../../../hooks/cart";


function Recommend() {
    const [product, setProduct] = useState([]);

    const [hoverArrow, setHoverArrow] = useState(null);

    const { addCartBuy } = useStoreCart();
    const { callErrorAlert, callAlert } = useStoreAlert();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getLimitedGameWithPriceService(3);
                if (res.statusCode === 200) {
                    setProduct(res.data);
                    console.log(res.data)
                }
                else {
                    console.log("Failed to fetching Game Recommend", res.errors);
                }
            }
            catch (error) {
                console.log("Errors: ", error)
            }
        }
        fetchProduct();
    }, [])

    const handleMoveToCart = async (productId) => {
        try {
            const item = await getGamesWithPlatformByGameIdService(productId);
            if (item.statusCode === 200) {
                addCartBuy(item.data[0]);
                callAlert("This game has been added to the cart successfully")
            } else {
                callErrorAlert("Failed to add to cart. Please try again.");
            }
        } catch (error) {
            console.log("Error: ", error);
            callErrorAlert("Failed to add to cart. Please try again.");
        }
    }

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

                        {/* <Typography sx={{
                            fontFamily: "barlow",
                            fontWeight: 600,
                            fontSize: { xs: 12, md: 13 },
                            color: "#999"
                        }}>
                            {item["Game console"]}
                        </Typography> */}

                        <Typography sx={{
                            fontSize: { xs: 14, md: 16 },
                            fontFamily: "barlow-regular",
                            paddingTop: { xs: 0, sm: 1 }
                        }}>
                            {item.final_price} $
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
                            onClick={() => handleMoveToCart(item.gameId)}
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