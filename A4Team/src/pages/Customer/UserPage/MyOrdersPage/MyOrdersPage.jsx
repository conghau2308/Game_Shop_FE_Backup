import { InfoOutlined, MedicalInformationOutlined, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardMedia, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../hooks/User";
import { getOrdersByUserId } from "../../../../api/orderService";
import { ReviewGameServiceSubmit } from "../../../../api/reviewsService";
import { useStoreAlert } from "../../../../hooks/alert";
import ReviewTheGame from "../../../../components/Customer/Review/ReviewGame";
import { formattedDateDetail } from "../../../../ultils/time";


function MyOrdersPage() {
    const [order, setOrder] = useState([]);
    const [reveal, setReveal] = useState(false);

    const { profile } = useAuthStore();
    const { callErrorAlert } = useStoreAlert();
    const [loadding, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            const res = await getOrdersByUserId(profile.data.id);
            if (res.statusCode === 200) {
                setOrder(res.data);
                console.log("Orders data: ", res.data);
                setLoading(false);
            }
            else {
                console.log("Error fetching orders by userId: ", res.errors);
                callErrorAlert("Failed to load your orders. Please try again later.");
                setLoading(false);
            }
        }
        fetchOrders();
    }, [])

    const handleReveal = (orderId) => {
        setReveal((prev) => ({
            ...prev,
            [orderId]: true
        }));
    };


    return (
        <Box>
            <Typography sx={{
                fontFamily: 'barlow-regular',
                fontSize: { sm: 23, md: 25 },
                color: '#fff'
            }}>
                My orders
            </Typography>

            {loadding ? (
                <Box sx={{
                    justifySelf: 'center',
                    marginTop: 6,
                    marginBottom: 5
                }}>
                    <CircularProgress />
                </Box>
            ) : (
                order.length > 0 ? (order.map((item, index) => (
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
                                    filter: reveal[item.orderId] ? "none" : "blur(6px)",
                                    transition: "filter 0.3s ease-in-out"
                                }}>
                                    {item.gameKey}
                                </Typography>

                                {!reveal[item.orderId] && (
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
                                            onClick={() => handleReveal(item.orderId)}
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
                            width: { xs: '85%', sm: '50%', md: '35%', lg: "30%" },
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
                                Paypal: {formattedDateDetail(item.purchaseDate)}
                            </Typography>
                        </Box>

                        <ReviewTheGame item={item} isOrder={true} />
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
                            width: { xs: '250px', sm: '400px' },
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
                                fontSize: { xs: 13, sm: 16 }
                            }}>
                                You have no purchases at this time
                            </Typography>
                        </Box>
                    </Box>
                )
            )}
        </Box>
    )
}

export default MyOrdersPage;