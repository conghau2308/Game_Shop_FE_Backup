import { DeleteForeverOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Card, CardMedia, Divider, Grid2, IconButton, MenuItem, Select, Typography, FormControl, Button } from "@mui/material";
import { useEffect, useState } from "react";


function Cart() {
    const [product, setProduct] = useState([]);

    const selectNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        const fakedata = [
            {
                image: "https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-game-microsoft-store-cover.jpg?v=1737544631",
                name: "Microsoft Flight Simulator 2024 (PC / Xbox Ser)",
                "Game console": "Xbox",
                quantity: 1,
                price: 30.12
            },
            {
                image: "https://gaming-cdn.com/images/products/442/616x353/minecraft-java-and-bedrock-edition-java-and-bedrock-edition-pc-game-cover.jpg?v=1716387513",
                name: "Assassin’s Creed Shadows Deluxe Edition",
                "Game console": "PlayStation",
                quantity: 2,
                price: 20.45
            },
            {
                image: "https://gaming-cdn.com/images/products/442/616x353/minecraft-java-and-bedrock-edition-java-and-bedrock-edition-pc-game-cover.jpg?v=1716387513",
                name: "Assassin’s Creed Shadows Deluxe Edition",
                "Game console": "PlayStation",
                quantity: 4,
                price: 40.1
            }
        ];
        setProduct(fakedata);
    }, []);

    const IconDevice = {
        PC: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-pc.svg",
        PlayStation: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-play.svg",
        Xbox: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-xbx.svg",
        Nitendo: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-swt.svg"
    };

    const ColorDevice = {
        PC: "rgb(218, 242, 65)",
        PlayStation: "rgb(103, 165, 252)",
        Xbox: "rgb(74, 225, 89)",
        Nitendo: "rgb(227, 61, 61)"
    }

    return (
        <Box>
            <Typography sx={{
                fontFamily: "barlow-regular",
                fontSize: {xs: 18, md: 22},
                color: "#fff",
                paddingBottom: 2
            }}>
                Cart
            </Typography>
            <Grid2 container sx={{
                bgcolor: "#3d3d3d"
            }} padding={{xs: 1, sm: 2, md: 4}} borderRadius="10px">
                {product.length ? (product.map((item, index) => {
                    const quantity = item.quantity;

                    return (
                        <Box sx={{
                            width: "100%"
                        }}>
                            {!(index === 0) && (
                                <Divider variant="middle" sx={{
                                    bgcolor: "#999",
                                    marginTop: {xs: 1, sm: 3},
                                    marginBottom: {xs: 1, sm: 3},
                                    width: "100%",
                                    display: "flex",
                                    justifySelf: "center"
                                }} />
                            )}
                            <Grid2 size={12} key={index} sx={{
                                borderBottom: "1px solid #999",
                                ':last-child': {
                                    borderBottom: "none"
                                },
                                paddingTop: {xs: 2, sm: 0}
                            }}>
                                <Grid2 container spacing={1}>
                                    <Grid2 size={{xs: 4, md: 3}} justifyItems="center" alignItems="center" sx={{
                                        bgcolor: "#3d3d3d"
                                    }}>
                                        <Card sx={{
                                            borderRadius: "5px",
                                            boxShadow: "none"
                                        }}>
                                            <CardMedia
                                                component="img"
                                                image={item.image}
                                                sx={{
                                                    width: {xs: "100px", sm: "160px", md: "150px", lg: "180px"},
                                                    height: "auto",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </Card>
                                    </Grid2>

                                    <Grid2 size={{xs: 5.5, sm: 6}} sx={{
                                        color: "#999",
                                        paddingLeft: {sm: 1, md: 3},
                                        alignContent: "center"
                                    }}>
                                        <Typography sx={{
                                            color: "#fff",
                                            fontFamily: "barlow-regular",
                                            fontSize: {xs: 13, md: 14, lg: 16},
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            WebkitBoxOrient: "vertical",
                                            WebkitLineClamp: 2,
                                            lineHeight: "1.5rem",
                                            height: "3rem"
                                        }}>
                                            {item.name}
                                        </Typography>

                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}>
                                            <Box sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                paddingTop: 1,
                                                paddingBottom: 2
                                            }}>
                                                <Box sx={{
                                                    bgcolor: `${ColorDevice[item["Game console"]]}`,
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: "50%",
                                                    padding: 0.5,
                                                    marginRight: "10px"
                                                }}>
                                                    <Box
                                                        component="img"
                                                        src={IconDevice[item["Game console"]]}
                                                        sx={{
                                                            width: {xs: 12, sm: 10, md: 20},
                                                            height: {xs: 12, sm: 10, md: 20}
                                                        }}
                                                    />
                                                </Box>

                                                <Typography sx={{
                                                    fontSize: {xs: 12, lg: 13},
                                                    fontFamily: "barlow",
                                                    fontWeight: 600
                                                }}>
                                                    {item["Game console"]}
                                                </Typography>
                                            </Box>

                                            <IconButton sx={{
                                                padding: 0
                                            }}>
                                                <DeleteForeverOutlined sx={{
                                                    color: "#999",
                                                    fontSize: {xs: 20, md: 23, lg: 28},
                                                    ':hover': {
                                                        color: '#fff'
                                                    }
                                                }} />
                                            </IconButton>
                                        </Box>
                                    </Grid2>

                                    <Grid2 size={{xs: 2.5, sm: 2, md: 3}} sx={{
                                        display: 'flex',
                                        justifyContent: "right",
                                        alignItems: "center",
                                        flexDirection: {xs: 'column', md: 'row'}
                                    }}>
                                        <Typography sx={{
                                            fontSize: {xs: 15, sm: 13, md: 15, lg: 20},
                                            fontFamily: "barlow-regular",
                                            color: "#fff",
                                            paddingRight: 2,
                                            paddingBottom: {xs: 0.5, md: 0},
                                            display: "flex",
                                            justifyContent: 'right',
                                            width: "100%"
                                        }}>
                                            {item.price} $
                                        </Typography>

                                        <FormControl sx={{ width: {xs: "55px", md: "55px"} }}>
                                            <Select
                                                labelId="quantity-label"
                                                value={quantity}
                                                variant="outlined"
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            backgroundColor: '#333',
                                                            color: '#fff',
                                                            height: "150px",
                                                            "&::-webkit-scrollbar": {
                                                                width: "3px",
                                                            },
                                                            "&::-webkit-scrollbar-thumb": {
                                                                background: "#999",
                                                                borderRadius: "10px"
                                                            }
                                                        }
                                                    },
                                                    disableScrollLock: true
                                                }}
                                                sx={{
                                                    '& .MuiSelect-icon': {
                                                        color: '#fff',
                                                        fontSize: {xs: 18, sm: 15, md: 20}
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid #999'
                                                    },
                                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid #ff5400'
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: '2px solid #ff5400'
                                                    },
                                                    color: "#fff",
                                                    fontSize: {xs: 13, lg: 14},
                                                    height: {xs: "35px", sm: "30px", md: "40px"},
                                                    width: "55px"
                                                }}
                                            >
                                                {selectNumber.map((option) => (
                                                    <MenuItem
                                                        key={option}
                                                        value={option}
                                                        sx={{
                                                            backgroundColor: '#333',
                                                            display: "flex",
                                                            width: '40px',
                                                            left: "8px",
                                                            borderRadius: "5px",
                                                            fontSize: {sm: 10, md: 13, lg: 14},
                                                            '&.Mui-selected': {
                                                                backgroundColor: "#ff5400 !important",
                                                                '&:hover': {
                                                                    backgroundColor: '#ff5400',
                                                                },
                                                            },
                                                            '&:hover': {
                                                                backgroundColor: '#ff5400',
                                                            }
                                                        }}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Box>
                    )
                }
                )) : (
                    <Box sx={{
                        justifyItems: 'center',
                        width: "100%"
                    }}>
                        <ShoppingCartOutlined sx={{
                            color: "#ff5400",
                            fontSize: {sm: 50, md: 60}
                        }}/>

                        <Typography sx={{
                            color: "#fff",
                            fontFamily: "barlow-regular",
                            fontSize: {sm: 18, md: 20},
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            Your cart is empty
                        </Typography>

                        <Typography sx={{
                            fontSize: {sm: 13, md: 15},
                            fontFamily: "barlow",
                            color: "#999",
                            fontWeight: 600,
                            paddingBottom: 3,
                            textAlign: 'center'
                        }}>
                            You didn't add any item in your cart yet. Browse the website to find amazing deals!
                        </Typography>

                        <Button sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontFamily: "barlow-regular",
                            fontSize: {sm: 15, md: 18},
                            border: "1px solid #999",
                            borderRadius: "5px",
                            padding: {sm: 1, md: 1.5},
                            paddingLeft: {sm: 3},
                            paddingRight: {sm: 3}
                        }}>
                            Discover games
                        </Button>
                    </Box>
                )}
            </Grid2>
        </Box>
    )
}

export default Cart;