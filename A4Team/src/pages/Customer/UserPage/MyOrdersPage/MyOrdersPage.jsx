import { InfoOutlined, MedicalInformationOutlined, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, TextField, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../hooks/User";
import { getOrdersByUserId } from "../../../../api/orderService";
import { ReviewGameServiceSubmit } from "../../../../api/reviewsService";
import { useStoreAlert } from "../../../../hooks/alert";


function MyOrdersPage() {
    const [order, setOrder] = useState([]);
    const [reveal, setReveal] = useState(false);
    const [islike, setIslike] = useState({});
    const [comment, setComment] = useState({});

    const { profile } = useAuthStore();
    const {callAlert, callErrorAlert, callWarningAlert} = useStoreAlert();

    const isTablet = useMediaQuery("(max-width:900px");

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await getOrdersByUserId(profile.data.id);
            if (res.statusCode === 200) {
                setOrder(res.data);
                console.log("Orders data: ", res.data);
            }
            else {
                console.log("Error fetching orders by userId: ", res.errors);
            }
        }
        fetchOrders();
    }, [])

    const handleLike = (orderID, value) => {
        setIslike((prev) => ({
            ...prev,
            [orderID]: prev[orderID] === value ? null : value
        }));
    };

    const handleReveal = (orderId) => {
        setReveal((prev) => ({
            ...prev,
            [orderId]: true
        }));
    };

    const handleReview = async (data) => {
        const currentComment = comment[data.orderId];
        const currentStatus = islike[data.orderId];

        if (!currentComment || currentComment.trim() === "" || !currentStatus) {
            callWarningAlert("Please select Like or Dislike and provide a comment before submitting.");
            return;
        };

        const formData = {
            userId: profile.data.id,
            gameId: data.gameId,
            // createdAt: new Date(),
            status: currentStatus,
            useFul: 0,
            comment: currentComment
        };

        try {
            const response = await ReviewGameServiceSubmit(formData);

            if (response.statusCode === 200) {
                console.log("Review game success");
                callAlert("Thank you for your feedback! Your review has been submitted successfully.");
            }
            else {
                console.log("Review failed", response.message);
                callErrorAlert("Sorry, something went wrong while submitting your review.");
            }
        }
        catch (error) {
            console.log("Error: ", error);
            callErrorAlert("An unexpected error occurred. Please try again later.");
        }
    }

    return (
        <Box>
            <Typography sx={{
                fontFamily: 'barlow-regular',
                fontSize: { sm: 23, md: 25 },
                color: '#fff'
            }}>
                My orders
            </Typography>

            {order.length > 0 ? (order.map((item, index) => (
                <Box key={index} sx={{
                    marginBottom: { xs: 2, sm: 7 },
                    borderBottom: '1px solid #999',
                    paddingBottom: 5,
                    ':last-child': {
                        borderBottom: 'none'
                    }
                }}>
                    <Box sx={{
                        height: { xs: "80px", sm: "100px" },
                        bgcolor: "#272727"
                    }} />
                    <Box sx={{
                        bgcolor: "#323232",
                        justifyItems: 'center',
                        position: 'relative',
                        minHeight: { xs: '230px', sm: '250px' },
                        alignContent: 'end',
                        borderRadius: "10px",
                        paddingBottom: 4
                    }}>
                        <Card sx={{
                            width: { xs: '60%', sm: '35%', lg: "25%" },
                            boxShadow: 'none',
                            borderRadius: '10px',
                            position: 'absolute',
                            top: { xs: -50, sm: -60, md: -80, lg: -70 },
                            left: { xs: '20%', sm: '32.5%', lg: "37.5%" }
                        }}>
                            <CardMedia
                                component="img"
                                image={item.gameImage}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "cover"
                                }}
                            />
                        </Card>

                        <Typography sx={{
                            color: '#fff',
                            fontFamily: 'barlow-regular',
                            fontSize: 20
                        }}>
                            {item.gameName}
                        </Typography>

                        <Typography sx={{
                            color: "#999",
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: { xs: 12, sm: 15 },
                            marginBottom: 1
                        }}>
                            Is now ready for activation in your account
                        </Typography>

                        <Box sx={{
                            bgcolor: '#1d1d1d',
                            justifyItems: 'center',
                            height: "80px",
                            minWidth: { xs: '250px', sm: "400px" },
                            position: "relative",
                            alignContent: 'center',
                            borderRadius: '5px'
                        }}>
                            <Typography sx={{
                                color: '#fff',
                                fontFamily: 'barlow-regular',
                                fontSize: { xs: 20, sm: 23, lg: 25 },
                                filter: reveal[item.order_id] ? "none" : "blur(6px)",
                                transition: "filter 0.3s ease-in-out"
                            }}>
                                {item.gameKey}
                            </Typography>

                            {!reveal[item.order_id] && (
                                <Box sx={{
                                    position: 'absolute',
                                    left: { xs: '20%', sm: '32.5%', md: "30%" },
                                    top: "25%",
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <Button sx={{
                                        textTransform: 'none',
                                        color: '#fff',
                                        background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                                        height: "50%",
                                        width: { xs: '60%', sm: '35%', md: "40%" }
                                    }}
                                        onClick={() => handleReveal(item.order_id)}
                                    >
                                        <Typography sx={{
                                            fontFamily: 'barlow-regular',
                                            fontSize: { xs: 16, md: 18 },
                                        }}>
                                            Reveal my code
                                        </Typography>
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        color: '#999',
                        width: { xs: '75%', sm: '45%', md: '35%', lg: "25%" },
                        justifyContent: 'space-between',
                        marginTop: 1,
                        marginBottom: 1
                    }}>
                        <Typography sx={{
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: { xs: 13, sm: 15 }
                        }}>
                            Order: #{item.orderId}
                        </Typography>

                        <Typography sx={{
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: { xs: 13, sm: 15 }
                        }}>
                            Paypal: {item.purchaseDate}
                        </Typography>
                    </Box>

                    <Box sx={{
                        bgcolor: "#323232",
                        color: "#fff",
                        display: 'flex',
                        width: '100%',
                        borderRadius: '10px',
                        paddingTop: 2,
                        paddingBottom: 2
                    }}>
                        <Box sx={{
                            width: '20%',
                            justifyItems: 'center',
                            alignContent: 'center',
                            borderRight: '1px solid #999',
                            height: '50%',
                            alignSelf: 'center',
                            display: { xs: 'none', sm: 'block' }
                        }}>
                            <Typography sx={{
                                fontFamily: 'barlow-regular',
                                fontSize: { sm: 15, md: 20 },
                                height: '35px',
                                alignContent: 'center'
                            }}>
                                Review the game
                            </Typography>
                        </Box>

                        <Box sx={{
                            width: { xs: '100%', sm: '80%' },
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                marginBottom: 2,
                                flexDirection: { xs: 'column', sm: 'row' }
                            }}>
                                <Typography sx={{
                                    fontFamily: 'barlow-regular',
                                    fontSize: { xs: 12, sm: 13, md: 16 },
                                    marginRight: 2,
                                    color: '#999'
                                }}>
                                    Did you like the game or are you disappointed? Say so
                                </Typography>

                                <Box sx={{
                                    marginTop: { xs: 1, sm: 0 }
                                }}>
                                    <Button sx={{
                                        borderRadius: 100,
                                        height: { xs: 30, md: 40 },
                                        minWidth: { xs: 50, md: 60 },
                                        border: islike[item.orderId] === "like" ? '1px solid #fff' : '1px solid rgb(0, 149, 0)',
                                        marginRight: { xs: 1, md: 3 },
                                    }}
                                        onClick={() => handleLike(item.orderId, "like")}
                                    >
                                        <ThumbUpOutlined sx={{
                                            color: 'rgb(0, 149, 0)',
                                            fontSize: { xs: 20, md: 25 }
                                        }} />
                                    </Button>

                                    <Button sx={{
                                        borderRadius: 100,
                                        height: { xs: 30, md: 40 },
                                        minWidth: { xs: 50, md: 60 },
                                        border: islike[item.orderId] === "unlike" ? '1px solid #fff' : '1px solid rgb(215, 23, 23)'
                                    }}
                                        onClick={() => handleLike(item.orderId, "dislike")}
                                    >
                                        <ThumbDownOutlined sx={{
                                            color: 'rgb(215, 23, 23)',
                                            fontSize: { xs: 20, md: 25 }
                                        }} />
                                    </Button>
                                </Box>
                            </Box>

                            <Box sx={{
                                width: { xs: '90%', sm: '80%' },
                                justifySelf: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: {xs: 'column', sm: 'row'}
                            }}>
                                <Box sx={{
                                    width: {xs: '100%', sm: '85%'}
                                }}>
                                <TextField
                                    type="text"
                                    variant="outlined"
                                    multiline
                                    value={comment[item.orderId] || ""}
                                    onChange={(e) =>
                                        setComment((prev) => ({
                                            ...prev,
                                            [item.orderId]: e.target.value,
                                        }))
                                    }
                                    minRows={isTablet ? 2 : 3}
                                    maxRows={isTablet ? 3 : 5}
                                    fullWidth
                                    placeholder="Type your review here..."
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                border: "2px solid #999"
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#ff5400"
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#ff5400"
                                            }
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                            bgcolor: "#272727",
                                            fontFamily: "barlow-regular",
                                            fontSize: { xs: 13, sm: 16 }
                                        },
                                        "& .MuiInputBase-inputMultiline": {
                                            overflowY: "auto",
                                            "&::-webkit-scrollbar": {
                                                width: "4px",
                                            },
                                            "&::-webkit-scrollbar-thumb": {
                                                backgroundColor: "#999",
                                                borderRadius: "10px",
                                            },
                                            "&::placeholder": {
                                                fontSize: { xs: 13, sm: 16 },
                                                fontFamily: 'barlow',
                                                fontWeight: 600
                                            }
                                        }
                                    }}
                                />
                                </Box>

                                <Button sx={{
                                    textTransform: 'none',
                                    background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                                    height: '60%',
                                    padding: 1,
                                    minWidth: {sm: '10%', md: '12%'},
                                    marginTop: {xs: 2, sm: 0}
                                }}
                                    onClick={() => handleReview(item)}
                                >
                                    <Typography sx={{
                                        fontFamily: 'barlow-regular',
                                        fontSize: {xs: 13, sm: 14, md: 16},
                                        color: '#fff'
                                    }}>
                                        Submit
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))) : (
                <Box sx={{
                    justifyItems: 'center',
                    marginTop: 5, marginBottom: 5
                }}>
                    <Box sx={{
                        bgcolor: 'rgb(0, 50, 66)',
                        color: 'rgb(34, 200, 255)',
                        display: 'flex',
                        width: {xs: '250px', sm: '400px'},
                        justifyContent: 'center',
                        padding: 1.5,
                        borderRadius: '10px'
                    }}>
                        <InfoOutlined sx={{
                            fontSize: {xs: 20, sm: 25}
                        }}/>
                        <Typography sx={{
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: {xs: 13, sm: 16}
                        }}>
                            You have no purchases at this time
                        </Typography>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default MyOrdersPage;