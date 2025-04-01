import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ConfirmPayment() {
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    const handlePayment = () => {
        navigate("/game-activation")
    }

    return (
        <Box>
            <Typography sx={{
                color: '#fff',
                fontFamily: 'barlow-regular',
                fontSize: {xs: 18, sm: 20},
                paddingBottom: {xs: 2, sm: 3}
            }}>
                OTP authentication
            </Typography>

            <TextField
                variant="outlined"
                label="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                sx={{
                    width: '100%',
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
                        fontFamily: "barlow-regular"
                    },
                    "& .MuiInputLabel-root": {
                        color: "white",
                        fontFamily: "barlow-regular"
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "white",
                        fontFamily: "barlow-regular"
                    }
                }}
            />

            <Typography sx={{
                color: '#fff',
                fontFamily: "barlow",
                fontWeight: 600,
                padding: 1,
                marginTop: {xs: 1, md: 2},
                marginBottom: {xs: 3, md: 5},
                fontSize: {xs: 13, md: 15}
            }}>
                OTP has been sent to the registered phone number. Please enter OTP to continue the transaction.
            </Typography>

            <Box sx={{
                width: "100%",
                justifyContent: 'space-evenly',
                display: 'flex'
            }}>
                <Button sx={{
                    textTransform: 'none',
                    width: '30%',
                    bgcolor: '#999',
                    padding: 1
                }}
                    onClick={() => navigate("/make-payment/fill-payment")}
                >
                    <Typography sx={{
                        color: '#fff',
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 15, md: 18}
                    }}>
                        Cancel
                    </Typography>
                </Button>

                <Button sx={{
                    textTransform: 'none',
                    width: '30%',
                    background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                    padding: 1
                }}
                    onClick={handlePayment}
                >
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 15, md: 18},
                        color: '#fff'
                    }}>
                        Payment
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}

export default ConfirmPayment;