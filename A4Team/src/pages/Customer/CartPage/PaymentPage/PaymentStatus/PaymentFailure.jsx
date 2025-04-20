import { Box, Typography, Button, Card, CardContent, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartFooter from "../../../../../components/Customer/CartPage/CartFooter";
import CartHeader from "../../../../../components/Customer/CartPage/CartHeader";

function PaymentFailure() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate("/cart");
    };

    return (
        <Box sx={{
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#272727",
            alignItems: "center",
            margin: '-8px'
        }}>
            <CartHeader activate={1} />

            <Box sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: { xs: "10px", sm: "20px" }
            }}>
                <Card sx={{
                    maxWidth: 600,
                    width: "100%",
                    marginBottom: "20px",
                    padding: { xs: "10px", sm: "20px" },
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    bgcolor: '#323232'
                }}>
                    <CardContent>
                        <Alert severity="error" sx={{ marginBottom: "20px", fontSize: { xs: "14px", sm: "16px" }, justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant="h6" sx={{ fontFamily: "barlow-regular", fontSize: { xs: 20, md: 25 }, fontWeight: 600 }}>
                                Payment Failed!
                            </Typography>
                        </Alert>

                        <Typography variant="body1" sx={{
                            marginBottom: "20px",
                            fontSize: { xs: "14px", sm: "18px" },
                            color: "#999",
                            fontFamily: 'barlow-regular',
                            textAlign: 'center',
                            paddingTop: 2,
                            paddingBottom: 2
                        }}>
                            Unfortunately, your payment was not successful. Please check your payment details and try again.
                        </Typography>

                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleContinueShopping}
                            sx={{
                                padding: { xs: "8px 15px", sm: "10px 20px" },
                                fontSize: { xs: "14px", sm: "16px" },
                                textTransform: "none",
                                width: "100%",
                                backgroundColor: "#f44336",
                                ":hover": {
                                    backgroundColor: "#d32f2f"
                                }
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'barlow-regular',
                                color: '#fff',
                                fontSize: {xs: 16, md: 18}
                            }}>
                                Try Again
                            </Typography>
                        </Button>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{
                width: '100%'
            }}>
                <CartFooter />
            </Box>
        </Box>
    );
}

export default PaymentFailure;
