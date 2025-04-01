import { Box, Button, Typography } from "@mui/material";
import CartHeader from "../../../../components/Customer/CartPage/CartHeader";
import { ThumbUpOutlined } from "@mui/icons-material";
import CartFooter from "../../../../components/Customer/CartPage/CartFooter";
import { useNavigate } from "react-router-dom";


function GameActivationPage() {
    const navigate = useNavigate();

    return (
        <Box sx={{
            bgcolor: "#272727",
            margin: '-8px',
            minHeight: "100vh",
            position: 'relative'
        }}>
            <CartHeader activate={2}/>

            <Box sx={{
                paddingTop: {xs: 20, sm: 15},
                paddingLeft: {xs: 2, sm: 10, md: 20, lg: 30},
                paddingRight: {xs: 2, sm: 10, md: 20, lg: 30}
            }}>
                <Box sx={{
                    justifyItems: 'center',
                    color: '#fff',
                    paddingBottom: 5
                }}>
                    <ThumbUpOutlined sx={{
                        fontSize: {xs: 40, sm: 45}
                    }}/>

                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 25, sm: 30}
                    }}>
                        Thank you for your purchase
                    </Typography>
                </Box>

                <Box sx={{
                    bgcolor: "#323232",
                    padding: 5,
                    color: '#999',
                    borderRadius: '10px',
                    paddingLeft: {xs: 2, sm: 5, md: 10, lg: 15},
                    paddingRight: {xs: 2, sm: 5, md: 10, lg: 15},
                    justifyItems: 'center'
                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        marginBottom: 4,
                        fontSize: {xs: 13, sm: 17}
                    }}>
                        The game activation code has been sent in your order section. Please go to 'My Orders' to retrieve the code and proceed with activating the game.
                    </Typography>

                    <Box sx={{
                        width: '50%'
                    }}>
                    <Button sx={{
                        textTransform: 'none',
                        padding: {xs: 1, sm: 2},
                        width: '100%',
                        background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                    }}
                        onClick={() => navigate("/my-orders")}
                    >
                        <Typography sx={{
                            color: '#fff',
                            fontFamily: 'barlow-regular',
                            fontSize: 18
                        }}>
                            Go to my order
                        </Typography>
                    </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%'
            }}>
                <CartFooter />
            </Box>
        </Box>
    )
}

export default GameActivationPage;