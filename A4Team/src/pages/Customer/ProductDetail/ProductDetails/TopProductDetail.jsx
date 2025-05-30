import { CheckOutlined, ClearOutlined, LocalOfferOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Typography, Box, Grid2, Button, CardMedia, Card, Container, TextField, Autocomplete, useMediaQuery, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGamesWithPlatformByGameIdService } from "../../../../api/gameListService";
import { useStoreAlert } from "../../../../hooks/alert";
import useStoreCart from "../../../../hooks/cart";


function TopProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [platformsData, setPlatformsData] = useState([]);
    const [edition, setEdition] = useState([]);

    const editionList = edition.map((option) => option.edition);
    const [deviceValue, setDeviceValue] = useState(null);
    const [editionValue, setEditionValue] = useState(null);

    const isMobile = useMediaQuery("(max-width:600px)");

    const { addCartBuy } = useStoreCart();
    const { callAlert } = useStoreAlert();

    useEffect(() => {
        const fetchGameWithPlatform = async () => {
            const res = await getGamesWithPlatformByGameIdService(id);
            if (res.statusCode === 200) {
                setPlatformsData(res.data);
                console.log("Data game platform: ", res.data);

                if (res.data.length > 0) {
                    setProduct(res.data[0]);
                    setDeviceValue(res.data[0].platformName);
                }
            }
            else {
                console.log("Error fetching game with platform: ", res.errors);
            }
        }
        fetchGameWithPlatform();
    }, []);

    const deviceList = [...new Set(platformsData.map((p) => p.platformName))];

    useEffect(() => {
        const fakedata = [
            {
                edition: "Standard Edition"
            }
        ];
        setEdition(fakedata);
        setEditionValue(fakedata[0].edition);
    }, []);

    const IconDevice = {
        PC: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-pc.svg",
        PlayStation: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-play.svg",
        Xbox: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-xbx.svg",
        Nintendo: "https://www.instant-gaming.com/themes/igv2/images/icons/platforms/icon-swt.svg"
    };

    const ColorDevice = {
        PC: "rgb(218, 242, 65)",
        PlayStation: "rgb(103, 165, 252)",
        Xbox: "rgb(74, 225, 89)",
        Nintendo: "rgb(227, 61, 61)"
    }

    const isFutureRelease = (releaseDate) => {
        if (!releaseDate) return false;

        const today = new Date();
        const releaseDateGame = new Date(releaseDate);

        return releaseDateGame >= today;
    }

    const handleAddToCart = (item) => {
        addCartBuy(item);
        callAlert("This game has been added to the cart successfully.")
    }


    return (
        <Box>
            {isMobile ? (
                <Box>
                    {product.background ? (
                        <Box
                            component="img"
                            src={product.background}
                            style={{
                                height: "210px",
                                width: "100%",
                                objectFit: "cover",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)"
                            }}
                        />
                    ) : (
                        <Skeleton sx={{
                            width: '90%', height: 210,
                            justifySelf: 'center',
                            bgcolor: '#323232',
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)"
                        }} animation='wave' />
                    )}

                    <Box sx={{
                        paddingLeft: 2,
                        paddingRight: 2
                    }}>
                        {product.name ? (
                            <Box sx={{
                                color: "#fff",
                                fontSize: 20,
                                fontFamily: "barlow-regular",
                                paddingTop: 1,
                                paddingBottom: 2
                            }}>
                                {product.name}
                            </Box>
                        ) : (
                            <Box sx={{
                                width: '80%', height: '10%', paddingBottom: 2
                            }}>
                                <Skeleton sx={{ width: "70%", height: 6, bgcolor: '#fff', borderRadius: 2, marginBottom: 1 }} animation="wave" />
                                <Skeleton sx={{ width: "100%", height: 6, bgcolor: '#fff', borderRadius: 2 }} animation="wave" />
                            </Box>
                        )}

                        <Box sx={{
                            display: "flex",
                            bgcolor: "#101010",
                            color: "white",
                            paddingTop: 1,
                            paddingBottom: 1,
                            marginBottom: 2,
                            border: "1px solid #999",
                            borderRadius: "5px"
                        }}>
                            <Container sx={{
                                display: "flex",
                                borderRight: "1px solid #999",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                {product.platformName ? (
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            bgcolor: `${ColorDevice[product.platformName]}`,
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: "50px",
                                            marginRight: "8px"
                                        }}>
                                            <Box
                                                component="img"
                                                src={IconDevice[product.platformName]}
                                                sx={{
                                                    width: 15,
                                                    height: 15,
                                                    padding: "5px"
                                                }}
                                            />
                                        </Box>

                                        <Typography sx={{
                                            fontSize: 10,
                                            fontFamily: "barlow-regular"
                                        }}>
                                            {product.platformName}
                                        </Typography>
                                    </Box>
                                ) : (
                                    <Box>
                                        <Skeleton sx={{ width: 40, height: 5, bgcolor: '#fff' }} animation="wave" />
                                        <Skeleton sx={{ width: 60, height: 5, bgcolor: '#fff' }} animation="wave" />
                                    </Box>
                                )}
                            </Container>

                            <Container sx={{
                                display: isFutureRelease(product.releaseDate) ? "none" : "flex",
                                alignItems: "center",
                                justifyContent: 'center'
                            }}>
                                {product.isInStock ?
                                    <Box sx={{
                                        display: "flex"
                                    }}>
                                        <CheckOutlined sx={{ color: "rgba(0, 255, 0, 1)", fontSize: 15, paddingRight: "3px" }} />
                                        <Typography sx={{ fontSize: 10, whiteSpace: "nowrap", fontFamily: "barlow-regular" }}>
                                            In stock
                                        </Typography>
                                    </Box>
                                    :
                                    <Box sx={{
                                        display: "flex"
                                    }}>
                                        <ClearOutlined sx={{ color: "rgb(204, 22, 22)", fontSize: 15, paddingRight: "3px" }} />
                                        <Typography sx={{ fontSize: 10, whiteSpace: "nowrap", fontFamily: "barlow-regular" }}>
                                            Out of stock
                                        </Typography>
                                    </Box>
                                }
                            </Container>

                            <Container sx={{
                                display: product.isInStock ? "flex" : "none",
                                borderLeft: "1px solid #999",
                                alignItems: "center",
                                justifyContent: 'center'
                            }}>
                                <CheckOutlined sx={{
                                    color: "rgba(0, 255, 0, 1)",
                                    fontSize: 15,
                                    paddingRight: "3px"
                                }} />

                                <Typography sx={{
                                    fontSize: 10,
                                    whiteSpace: "nowrap",
                                    fontFamily: "barlow-regular"
                                }}>
                                    Digital Download
                                </Typography>
                            </Container>

                            <Container sx={{
                                display: isFutureRelease(product.releaseDate) ? "flex" : "none",
                                borderLeft: "1px solid #999",
                                alignItems: "center",
                                justifyContent: 'center'
                            }}>
                                <Typography sx={{
                                    fontSize: 10,
                                    fontFamily: "barlow-regular",
                                    whiteSpace: "nowrap"
                                }}>
                                    Release date: {product.releaseDate}
                                </Typography>
                            </Container>
                        </Box>

                        <Grid2 container sx={{
                            width: "100%",
                            justifyContent: "space-between",
                            display: "flex",
                            paddingBottom: 2
                        }} spacing={1}>
                            <Grid2 size={6}>
                                <Autocomplete
                                    options={deviceList}
                                    value={deviceValue}
                                    fullWidth
                                    disableClearable
                                    freeSolo={false}
                                    onChange={(event, newValue) => {
                                        setDeviceValue(newValue);
                                        const selected = platformsData.find(p => p.platformName === newValue);
                                        if (selected) setProduct(selected);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select a gaming device"
                                            id="outlined-basic"
                                            slotProps={{
                                                htmlInput: {
                                                    ...params.inputProps,
                                                    readOnly: true,
                                                }
                                            }}
                                            sx={{
                                                "& .MuiInputBase-input": { color: "white", cursor: "pointer" },
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": { borderColor: "white" },
                                                    "&:hover fieldset": { border: "1px solid #ff5400" },
                                                    "&.Mui-focused fieldset": { border: "1px solid #ff5400" }
                                                },
                                                "& .MuiInputLabel-root.Mui-focused": {
                                                    color: "white",
                                                    fontFamily: "barlow-regular"
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "white",
                                                    fontFamily: "barlow-regular",
                                                    fontSize: 13
                                                },
                                                "& .MuiAutocomplete-popupIndicator": {
                                                    color: "white"
                                                },
                                                "& .MuiAutocomplete-clearIndicator": {
                                                    color: "white"
                                                },
                                                "& .MuiAutocomplete-inputRoot": {
                                                    bgcolor: "rgba(207, 207, 207, 0.13)",
                                                    fontFamily: "barlow-regular"
                                                },
                                            }}
                                        />
                                    )}
                                    slotProps={{
                                        popper: {
                                            sx: {
                                                "& .MuiAutocomplete-listbox": {
                                                    backgroundColor: "#272727",
                                                    fontFamily: "barlow-regular",
                                                    color: "white",
                                                    "&::-webkit-scrollbar": {
                                                        width: "5px",
                                                    },
                                                    "&::-webkit-scrollbar-thumb": {
                                                        background: "#999",
                                                        borderRadius: "10px"
                                                    }
                                                },
                                                "& .MuiAutocomplete-option": {
                                                    transition: "color 0.2s ease-in-out",
                                                    borderBottom: "1px solid #999",
                                                    bgcolor: "#272727",
                                                    "&:hover": {
                                                        color: "#ff5400",
                                                        bgcolor: "#272727 !important"
                                                    },
                                                    "&.Mui-focused": {
                                                        bgcolor: "#272727 !important",
                                                        color: "#ff5400"
                                                    },
                                                    "&:last-child": {
                                                        borderBottom: "none"
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                />
                            </Grid2>

                            <Grid2 size={6}>
                                <Autocomplete
                                    options={editionList}
                                    value={editionValue}
                                    fullWidth
                                    disableClearable
                                    freeSolo={false}
                                    onChange={(event, newValue) => setEditionValue(newValue)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select a game edition"
                                            id="outlined-basic"
                                            slotProps={{
                                                htmlInput: {
                                                    ...params.inputProps,
                                                    readOnly: true,
                                                }
                                            }}
                                            sx={{
                                                "& .MuiInputBase-input": { color: "white", cursor: "pointer" },
                                                "& .MuiOutlinedInput-root": {
                                                    "& fieldset": { borderColor: "white" },
                                                    "&:hover fieldset": { border: "1px solid #ff5400" },
                                                    "&.Mui-focused fieldset": { border: "1px solid #ff5400" }
                                                },
                                                "& .MuiInputLabel-root.Mui-focused": {
                                                    color: "white",
                                                    fontFamily: "barlow-regular"
                                                },
                                                "& .MuiInputLabel-root": {
                                                    color: "white",
                                                    fontFamily: "barlow-regular",
                                                    fontSize: 13
                                                },
                                                "& .MuiAutocomplete-popupIndicator": {
                                                    color: "white"
                                                },
                                                "& .MuiAutocomplete-clearIndicator": {
                                                    color: "white"
                                                },
                                                "& .MuiAutocomplete-inputRoot": {
                                                    bgcolor: "rgba(207, 207, 207, 0.13)",
                                                    fontFamily: "barlow-regular"
                                                },
                                            }}
                                        />
                                    )}
                                    slotProps={{
                                        popper: {
                                            sx: {
                                                "& .MuiAutocomplete-listbox": {
                                                    backgroundColor: "#272727",
                                                    fontFamily: "barlow-regular",
                                                    color: "white",
                                                    borderRadius: 0,
                                                    "&::-webkit-scrollbar": {
                                                        width: "5px",
                                                    },
                                                    "&::-webkit-scrollbar-thumb": {
                                                        background: "#999",
                                                        borderRadius: "10px"
                                                    }
                                                },
                                                "& .MuiAutocomplete-option": {
                                                    transition: "color 0.2s ease-in-out",
                                                    borderBottom: "1px solid #999",
                                                    bgcolor: "#272727",
                                                    "&:hover": {
                                                        color: "#ff5400",
                                                        bgcolor: "#272727 !important"
                                                    },
                                                    "&.Mui-focused": {
                                                        bgcolor: "#272727 !important",
                                                        color: "#ff5400"
                                                    },
                                                    "&:last-child": {
                                                        borderBottom: "none"
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                />
                            </Grid2>
                        </Grid2>

                        <Box sx={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                            color: "white",
                            alignItems: "flex-end",
                            paddingBottom: 2
                        }}>
                            <LocalOfferOutlined sx={{
                                transform: "rotate(90deg)",
                                fontSize: 10,
                                marginBottom: "5px"
                            }} />

                            {product.original_price ? (
                                <Typography sx={{
                                    textDecoration: "line-through",
                                    fontSize: 15,
                                    padding: "0 10px 0 3px",
                                    fontFamily: "barlow",
                                    fontWeight: 600,
                                    alignContent: "flex-end"
                                }}>
                                    {product.original_price}$
                                </Typography>
                            ) : (
                                <Box sx={{ height: 15, width: 40 }}>
                                    <Skeleton sx={{ width: 20, bgcolor: '#fff', height: 5 }} animation='wave' />
                                    <Skeleton sx={{ width: 15, bgcolor: '#fff', height: 5 }} animation='wave' />
                                </Box>
                            )}

                            {product.discount_percent ? (
                                <Typography sx={{
                                    fontSize: 20,
                                    color: "#ff5400",
                                    fontFamily: "barlow",
                                    fontWeight: 600,
                                    alignContent: "flex-end",
                                    marginBottom: "-3px"
                                }}>
                                    {product.discount_percent}%
                                </Typography>
                            ) : (
                                <Box sx={{ height: 20, display: 'flex', alignItems: 'center' }}>
                                    <Box sx={{ width: '80%' }}>
                                        <Skeleton sx={{ width: 20, bgcolor: '#ff5400', height: 5 }} animation='wave' />
                                        <Skeleton sx={{ width: 15, bgcolor: '#ff5400', height: 5 }} animation='wave' />
                                    </Box>
                                    <Typography sx={{ color: '#ff5400', fontSize: 20, fontFamily: 'barlow-regular' }}> % </Typography>
                                </Box>
                            )}

                            {product.finalPrice ? (
                                <Typography sx={{
                                    fontSize: 30,
                                    fontFamily: "barlow",
                                    padding: "0 20px",
                                    fontWeight: 700,
                                    alignSelf: "flex-end",
                                    margin: "-8px"
                                }}>
                                    {product.finalPrice}$
                                </Typography>
                            ) : (
                                <Box sx={{ height: 30, width: 40, display: 'flex', padding: "0 20px", alignItems: 'center' }}>
                                    <Box sx={{ width: '80%' }}>
                                        <Skeleton sx={{ width: 25, bgcolor: '#fff', height: 4 }} animation='wave' />
                                        <Skeleton sx={{ width: 15, bgcolor: '#fff', height: 4 }} animation='wave' />
                                        <Skeleton sx={{ width: 20, bgcolor: '#fff', height: 4 }} animation='wave' />
                                    </Box>
                                    <Typography sx={{
                                        color: '#fff',
                                        fontSize: 30,
                                        fontFamily: "barlow",
                                        fontWeight: 700,
                                    }}> $ </Typography>
                                </Box>
                            )}
                        </Box>

                        <Box sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Button sx={{
                                textTransform: "none",
                                background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                                padding: 1.5,
                                width: "80vw",
                                color: "#fff",
                                borderRadius: "5px",
                                height: '6vh'
                            }} fullWidth disabled={isFutureRelease(product.releaseDate)}
                                onClick={() => handleAddToCart(product)}
                            >
                                {!isFutureRelease(product.releaseDate) && (<ShoppingCartOutlined />)}

                                <Typography sx={{
                                    fontSize: isFutureRelease(product.releaseDate) ? 14 : 20,
                                    paddingLeft: 1,
                                    color: '#fff'
                                }}>
                                    {isFutureRelease(product.releaseDate) ? "Get notified by e-mail on stock availability" : "Add to cart"}
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box sx={{
                    position: "relative",
                    height: { sm: "800px", md: "600px" },
                    bgcolor: "#272727"
                }}>
                    {product.background ? (
                        <Box
                            component="img"
                            src={product.background}
                            style={{
                                height: "auto",
                                width: "100%",
                                objectFit: "cover",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)",
                                display: "flex"
                            }}
                        />
                    ) : (
                        <Skeleton sx={{ width: "95%", height: { sm: '40vh', md: '80vh' }, justifySelf: 'center', bgcolor: '#323232' }} animation="wave" />
                    )}
                    <Grid2 container justifyContent="center" spacing={{ sm: 4, lg: 8 }} sx={{
                        paddingLeft: { lg: 20, md: 4, sm: 2 },
                        paddingRight: { lg: 20, md: 4, sm: 2 },
                        position: "absolute",
                        bottom: 0,
                        width: '100%'
                    }}>
                        <Grid2 size={{ lg: 6, md: 6, sm: 12 }} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: { sm: "flex-end", md: "flex-start" },
                            paddingBottom: { sm: 4, md: 0 }
                        }}>
                            <Card sx={{
                                boxShadow: "none",
                                height: { sm: "100%", md: "80%" },
                                borderRadius: "10px",
                                bgcolor: product.image ? "#272727" : "#999"
                            }}>
                                {product.image ? (
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        sx={{
                                            width: { sm: "100%", md: "auto" },
                                            height: { sm: "auto", md: "100%" },
                                            objectFit: "cover"
                                        }}
                                    />
                                ) : (
                                    <Skeleton sx={{ width: { sm: '80vw', md: "50vw" }, height: { sm: '25vh', md: "100%" }, bgcolor: '#999' }} animation='wave' />
                                )}
                            </Card>
                        </Grid2>

                        <Grid2 size={{ lg: 6, md: 6, sm: 12 }} sx={{
                            background: { sm: "#272727", md: "linear-gradient(rgba(76, 71, 71, 0.86)10%, rgba(39, 39, 39, 1) 90%)" },
                            justifyItems: "center",
                            borderRadius: "10px",
                            width: "100%"
                        }}>
                            {product.name ? (
                                <Typography sx={{
                                    width: { xs: "100%", sm: "100%", md: "90%" },
                                    display: "flex",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: { lg: 30, md: 23, sm: 25 },
                                    paddingBottom: { sm: 1, md: 3 },
                                    paddingTop: { sm: 0, md: 3 }
                                }}>
                                    {product.name}
                                </Typography>
                            ) : (
                                <Box sx={{
                                    width: '80%', height: '10%', paddingBottom: { sm: 1, md: 3 },
                                    paddingTop: { sm: 0, md: 3 }
                                }}>
                                    <Skeleton sx={{ width: "70%", height: "50%", bgcolor: '#fff', borderRadius: 2 }} animation="wave" />
                                    <Skeleton sx={{ width: "100%", height: "50%", bgcolor: '#fff', borderRadius: 2 }} animation="wave" />
                                </Box>
                            )}

                            <Box sx={{
                                display: "flex",
                                bgcolor: { sm: "#101010", md: "#262626" },
                                color: "white",
                                padding: 1,
                                paddingTop: { sm: 2, md: 2 },
                                paddingBottom: { sm: 1, md: 2 },
                                borderRadius: "30px",
                                marginBottom: { sm: 2, md: 3 },
                            }}>
                                <Container sx={{
                                    borderRight: "1px solid #999",
                                    alignItems: "center"
                                }}>

                                    {product.platformName ? (
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: 'center'
                                        }}>
                                            <Box sx={{
                                                bgcolor: `${ColorDevice[product.platformName]}`,
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "50px",
                                                marginRight: "5px"
                                            }}>
                                                <Box
                                                    component="img"
                                                    src={IconDevice[product.platformName]}
                                                    sx={{
                                                        width: { xs: 10, sm: 20, md: 15 },
                                                        height: { xs: 10, sm: 20, md: 15 },
                                                        padding: "5px"
                                                    }}
                                                />
                                            </Box>
                                            <Typography sx={{
                                                fontSize: { lg: 13, md: 10, sm: 12 },
                                                fontFamily: "barlow-regular"
                                            }}>
                                                {product.platformName}
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <Skeleton sx={{ width: 40, height: 10, bgcolor: '#fff' }} animation="wave" />
                                            <Skeleton sx={{ width: 90, height: 10, bgcolor: '#fff' }} animation="wave" />
                                        </Box>
                                    )}
                                </Container>

                                <Container sx={{
                                    display: isFutureRelease(product.releaseDate) ? "none" : "flex",
                                    alignItems: "center"
                                }}>
                                    {product.isInStock ?
                                        <Box sx={{
                                            display: "flex"
                                        }}>
                                            <CheckOutlined sx={{ color: "rgba(0, 255, 0, 1)", fontSize: 19, paddingRight: "3px" }} />
                                            <Typography sx={{ fontSize: { lg: 13, md: 10, sm: 12 }, whiteSpace: "nowrap", fontFamily: "barlow-regular" }}>
                                                In stock
                                            </Typography>
                                        </Box>
                                        :
                                        <Box sx={{
                                            display: "flex"
                                        }}>
                                            <ClearOutlined sx={{ color: "rgb(204, 22, 22)", fontSize: 19, paddingRight: "3px" }} />
                                            <Typography sx={{ fontSize: { lg: 13, md: 10, sm: 12 }, whiteSpace: "nowrap", fontFamily: "barlow-regular" }}>
                                                Out of stock
                                            </Typography>
                                        </Box>
                                    }
                                </Container>

                                <Container sx={{
                                    display: product.isInStock ? "flex" : "none",
                                    borderLeft: "1px solid #999",
                                    alignItems: "center"
                                }}>
                                    <CheckOutlined sx={{
                                        color: "rgba(0, 255, 0, 1)",
                                        fontSize: 19,
                                        paddingRight: "3px"
                                    }} />

                                    <Typography sx={{
                                        fontSize: { lg: 13, md: 10, sm: 12 },
                                        whiteSpace: "nowrap",
                                        fontFamily: "barlow-regular"
                                    }}>
                                        Digital Download
                                    </Typography>
                                </Container>

                                <Container sx={{
                                    display: isFutureRelease(product.releaseDate) ? "flex" : "none",
                                    borderLeft: "1px solid #999",
                                    alignItems: "center"
                                }}>
                                    <Typography sx={{
                                        fontSize: { lg: 13, md: 10, sm: 12 },
                                        fontFamily: "barlow-regular",
                                        whiteSpace: "nowrap"
                                    }}>
                                        Release date: {product.releaseDate}
                                    </Typography>
                                </Container>
                            </Box>

                            <Grid2 container sx={{
                                width: { xs: "100%", sm: "100%", md: "90%" },
                                justifyContent: "space-between",
                                display: "flex",
                                paddingBottom: 2
                            }} spacing={2}>
                                <Grid2 size={6}>
                                    <Autocomplete
                                        options={deviceList}
                                        value={deviceValue}
                                        fullWidth
                                        disableClearable
                                        freeSolo={false}
                                        onChange={(event, newValue) => {
                                            setDeviceValue(newValue);
                                            const selected = platformsData.find(p => p.platformName === newValue);
                                            if (selected) setProduct(selected);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Select a gaming device"
                                                id="outlined-basic"
                                                slotProps={{
                                                    htmlInput: {
                                                        ...params.inputProps,
                                                        readOnly: true,
                                                    }
                                                }}
                                                sx={{
                                                    "& .MuiInputBase-input": { color: "white", cursor: "pointer" },
                                                    "& .MuiOutlinedInput-root": {
                                                        "& fieldset": { borderColor: "white" },
                                                        "&:hover fieldset": { border: "1px solid #ff5400" },
                                                        "&.Mui-focused fieldset": { border: "1px solid #ff5400" }
                                                    },
                                                    "& .MuiInputLabel-root.Mui-focused": {
                                                        color: "white",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                    "& .MuiInputLabel-root": {
                                                        color: "white",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                    "& .MuiAutocomplete-popupIndicator": {
                                                        color: "white"
                                                    },
                                                    "& .MuiAutocomplete-clearIndicator": {
                                                        color: "white"
                                                    },
                                                    "& .MuiAutocomplete-inputRoot": {
                                                        bgcolor: "#262626",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                }}
                                            />
                                        )}
                                        slotProps={{
                                            popper: {
                                                sx: {
                                                    "& .MuiAutocomplete-listbox": {
                                                        backgroundColor: "#272727",
                                                        fontFamily: "barlow-regular",
                                                        color: "white",
                                                        "&::-webkit-scrollbar": {
                                                            width: "5px",
                                                        },
                                                        "&::-webkit-scrollbar-thumb": {
                                                            background: "#999",
                                                            borderRadius: "10px"
                                                        }
                                                    },
                                                    "& .MuiAutocomplete-option": {
                                                        transition: "color 0.2s ease-in-out",
                                                        borderBottom: "1px solid #999",
                                                        bgcolor: "#272727",
                                                        "&:hover": {
                                                            color: "#ff5400",
                                                            bgcolor: "#272727 !important"
                                                        },
                                                        "&.Mui-focused": {
                                                            bgcolor: "#272727 !important",
                                                            color: "#ff5400"
                                                        },
                                                        "&:last-child": {
                                                            borderBottom: "none"
                                                        }
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </Grid2>

                                <Grid2 size={6}>
                                    <Autocomplete
                                        options={editionList}
                                        value={editionValue}
                                        fullWidth
                                        disableClearable
                                        freeSolo={false}
                                        onChange={(event, newValue) => setEditionValue(newValue)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Select a game edition"
                                                id="outlined-basic"
                                                slotProps={{
                                                    htmlInput: {
                                                        ...params.inputProps,
                                                        readOnly: true,
                                                    }
                                                }}
                                                sx={{
                                                    "& .MuiInputBase-input": { color: "white", cursor: "pointer" },
                                                    "& .MuiOutlinedInput-root": {
                                                        "& fieldset": { borderColor: "white" },
                                                        "&:hover fieldset": { border: "1px solid #ff5400" },
                                                        "&.Mui-focused fieldset": { border: "1px solid #ff5400" }
                                                    },
                                                    "& .MuiInputLabel-root.Mui-focused": {
                                                        color: "white",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                    "& .MuiInputLabel-root": {
                                                        color: "white",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                    "& .MuiAutocomplete-popupIndicator": {
                                                        color: "white"
                                                    },
                                                    "& .MuiAutocomplete-clearIndicator": {
                                                        color: "white"
                                                    },
                                                    "& .MuiAutocomplete-inputRoot": {
                                                        bgcolor: "#262626",
                                                        fontFamily: "barlow-regular"
                                                    },
                                                }}
                                            />
                                        )}
                                        slotProps={{
                                            popper: {
                                                sx: {
                                                    "& .MuiAutocomplete-listbox": {
                                                        backgroundColor: "#272727",
                                                        fontFamily: "barlow-regular",
                                                        color: "white",
                                                        borderRadius: 0,
                                                        "&::-webkit-scrollbar": {
                                                            width: "5px",
                                                        },
                                                        "&::-webkit-scrollbar-thumb": {
                                                            background: "#999",
                                                            borderRadius: "10px"
                                                        }
                                                    },
                                                    "& .MuiAutocomplete-option": {
                                                        transition: "color 0.2s ease-in-out",
                                                        borderBottom: "1px solid #999",
                                                        bgcolor: "#272727",
                                                        "&:hover": {
                                                            color: "#ff5400",
                                                            bgcolor: "#272727 !important"
                                                        },
                                                        "&.Mui-focused": {
                                                            bgcolor: "#272727 !important",
                                                            color: "#ff5400"
                                                        },
                                                        "&:last-child": {
                                                            borderBottom: "none"
                                                        }
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                </Grid2>
                            </Grid2>

                            <Box sx={{
                                display: "flex",
                                width: "90%",
                                justifyContent: "center",
                                color: "white",
                                alignItems: "flex-end",
                                paddingBottom: 2
                            }}>
                                <LocalOfferOutlined sx={{
                                    transform: "rotate(90deg)",
                                    fontSize: 18,
                                    marginBottom: "5px"
                                }} />

                                {product.original_price ? (
                                    <Typography sx={{
                                        textDecoration: "line-through",
                                        fontSize: 20,
                                        padding: "0 10px 0 3px",
                                        fontFamily: "barlow",
                                        fontWeight: 600,
                                    }}>
                                        {product.original_price}$
                                    </Typography>
                                ) : (
                                    <Box sx={{ height: 20, width: 50 }}>
                                        <Skeleton sx={{ width: 25, bgcolor: '#fff', height: 5 }} animation='wave' />
                                        <Skeleton sx={{ width: 15, bgcolor: '#fff', height: 5 }} animation='wave' />
                                    </Box>
                                )}

                                {product.discount_percent ? (
                                    <Typography sx={{
                                        fontSize: 20,
                                        color: "#ff5400",
                                        fontFamily: "barlow-regular"
                                    }}>
                                        {product.discount_percent}%
                                    </Typography>
                                ) : (
                                    <Box sx={{ height: 30, width: 50, display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ width: '80%' }}>
                                            <Skeleton sx={{ width: 25, bgcolor: '#ff5400', height: 5 }} animation='wave' />
                                            <Skeleton sx={{ width: 15, bgcolor: '#ff5400', height: 5 }} animation='wave' />
                                        </Box>
                                        <Typography sx={{ color: '#ff5400', fontSize: 20, fontFamily: 'barlow-regular' }}> % </Typography>
                                    </Box>
                                )}

                                {product.finalPrice ? (
                                    <Typography sx={{
                                        fontSize: { sm: 35, md: 40 },
                                        fontFamily: "barlow",
                                        padding: "0 20px",
                                        fontWeight: 700,
                                        alignSelf: "flex-end",
                                        margin: "-8px"
                                    }}>
                                        {product.finalPrice}$
                                    </Typography>
                                ) : (
                                    <Box sx={{ height: 50, width: 50, display: 'flex', padding: "0 20px", alignItems: 'center' }}>
                                        <Box sx={{ width: '80%' }}>
                                            <Skeleton sx={{ width: 25, bgcolor: '#fff', height: 5 }} animation='wave' />
                                            <Skeleton sx={{ width: 15, bgcolor: '#fff', height: 5 }} animation='wave' />
                                            <Skeleton sx={{ width: 20, bgcolor: '#fff', height: 5 }} animation='wave' />
                                        </Box>
                                        <Typography sx={{
                                            color: '#fff',
                                            fontSize: { sm: 35, md: 40 },
                                            fontFamily: "barlow",
                                            fontWeight: 700,
                                        }}> $ </Typography>
                                    </Box>
                                )}
                            </Box>

                            <Button sx={{
                                textTransform: "none",
                                background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                                padding: { sm: 1, md: 1.5 },
                                width: { sm: '40vw', md: '30vw' },
                                color: "#fff",
                                marginBottom: 5,
                                borderRadius: "5px",
                                height: '8vh'
                            }} fullWidth disabled={isFutureRelease(product.releaseDate)}
                                onClick={() => handleAddToCart(product)}
                            >
                                {!isFutureRelease(product.releaseDate) && (<ShoppingCartOutlined />)}

                                <Typography sx={{
                                    fontSize: isFutureRelease(product.releaseDate) ? 17 : { sm: 25, md: 20 },
                                    paddingLeft: 1,
                                    color: '#fff'
                                }}>
                                    {isFutureRelease(product.releaseDate) ? "Get notified by e-mail on stock availability" : "Add to cart"}
                                </Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                </Box>
            )}
        </Box>
    )
}

export default TopProductDetail;