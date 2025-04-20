import { Box, CircularProgress, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useStoreAlert } from "../../../../../hooks/alert";
import { makePaymentService } from "../../../../../api/paymentService";
import useStoreCart from "../../../../../hooks/cart";
import { useState } from "react";

function SelectMethod() {
    const navigate = useNavigate();
    const { callWarningAlert } = useStoreAlert();
    const { totalFinalPrice } = useStoreCart();
    const [loading, setLoading] = useState(false);

    const handleVNPay = async () => {
        setLoading(true);

        const paramsPayment = {
            amount: (totalFinalPrice * 25000).toFixed(0)
        };

        try {
            const response = await makePaymentService(paramsPayment);

            const redirectUrlRegex = /redirect:(.*)/;
            const match = response.data.match(redirectUrlRegex);
            if (match && match.length > 1) {
                const redirectUrl = match[1].trim();
                window.location.href = redirectUrl;
            } else {
                console.log("Redirect link not found in response");
            }
        }
        catch (error) {
            console.error("There was an error!", error);
        }
        finally {
            setLoading(false);
        }
    };

    const handleMoMo = () => {
        callWarningAlert("MoMo payment is not available. Please choose another method. We apologize for the inconvenience.")
    };

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#141414',
            paddingBottom: 4,
            borderRadius: '10px'
        }}>

            <Typography sx={{
                color: '#fff',
                fontFamily: 'barlow-regular',
                fontSize: { xs: 15, sm: 20 },
                paddingBottom: { xs: 1, sm: 3 },
                paddingTop: { xs: 1, sm: 3 },
                textAlign: 'center'
            }}>
                Please select a payment method
            </Typography>

            <Box
                sx={{
                    width: '80%',
                    backgroundColor: '#fff',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '5px',
                    marginBottom: 2,
                    cursor: 'pointer',
                    "&:hover": {
                        backgroundColor: 'rgba(221, 221, 221, 0.91)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }}
                onClick={handleVNPay}
            >
                <Box sx={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    {loading ? (
                        <CircularProgress />
                    ) : (
                        <Box
                            component="img"
                            src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
                            sx={{
                                width: 'auto',
                                height: { xs: 40, sm: 50, md: 60 },
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </Box>
                <Typography sx={{
                    fontFamily: 'barlow-regular',
                    fontSize: { xs: 15, sm: 18 },
                    color: '#000',
                    flexGrow: 1,
                    paddingLeft: 2
                }}>
                    Pay with VNPay
                </Typography>
                <NavigateNext sx={{
                    fontSize: 20,
                    color: '#000'
                }} />
            </Box>

            <Box
                sx={{
                    width: '80%',
                    backgroundColor: '#fff',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    "&:hover": {
                        backgroundColor: 'rgba(221, 221, 221, 0.91)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }}
                onClick={handleMoMo}
            >
                <Box sx={{
                    width: '40%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Box
                        component="img"
                        src="https://pay2s.vn/wp-content/uploads/2024/11/momo_icon_circle_pinkbg_RGB-1024x1024.png"
                        sx={{
                            width: 'auto',
                            height: { xs: 40, sm: 50, md: 60 },
                            objectFit: 'cover',
                        }}
                    />
                </Box>
                <Typography sx={{
                    fontFamily: 'barlow-regular',
                    fontSize: { xs: 15, sm: 18 },
                    color: '#000',
                    flexGrow: 1,
                    paddingLeft: 2
                }}>
                    Pay with MoMo
                </Typography>
                <NavigateNext sx={{
                    fontSize: 20,
                    color: '#000'
                }} />
            </Box>
        </Box>
    );
}

export default SelectMethod;
