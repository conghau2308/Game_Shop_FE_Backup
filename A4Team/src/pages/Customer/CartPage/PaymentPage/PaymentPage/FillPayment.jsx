import { NavigateNext } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isIssueDate, isNumeric, isWithoutAccents } from "../../../../../helpers/FormHelpers";


function FillPayment() {
    const bank = "Vietcombamk";
    const total = 127.99;
    
    const [cardnumber, setCardnumber] = useState('');
    const [cardname, setCardname] = useState('');
    const [issuedate, setIssuedate] = useState('');

    const onChangeCardnumber = (e) => {
        const value = e.target.value

        if (isNumeric(value)) {
            setCardnumber(value)
        }
        else {
            const fillteredValue = value.replace(/[^0-9]/g, '')
            setCardnumber(fillteredValue)
        }
    }

    const navigate = useNavigate();

    const handleConfirm = () => {
        if(cardnumber && cardname && issuedate) {
            navigate("/make-payment/confirm-payment")
        }
    }

    const onChangeCardname = (e) => {
        const value = e.target.value;

        if (isWithoutAccents(value)) {
            const normalText = value.replace(/\s+/g, ' ');
            setCardname(normalText)
        }
        else {
            const fillteredValue = value.replace(/[^a-zA-Z\s]/g, '');
            const normalText = fillteredValue.replace(/\s+/g, ' ');
            setCardname(normalText)
        }
    }

    const onChangeIssuedate = (e) => {
        let value = e.target.value;

        value = value.replace(/[^0-9/]/g, '');

        const isTyping = value.length > issuedate.length;

        if (isTyping && value.length === 2 && !value.includes('/')) {
            value = value + '/';
        }

        if (value.length > 5) {
            return;
        }

        setIssuedate(value)
    }

    return (
        <Box sx={{
            color: '#fff'
        }}>
            <Typography sx={{
                fontSize: {xs: 18, sm: 20},
                fontFamily: 'barlow-regular'
            }}>
                Bank transfer via {bank}
            </Typography>

            <Typography sx={{
                fontSize: {xs: 15, sm: 17},
                fontFamily: 'barlow',
                fontWeight: 600,
                paddingTop: {xs: 0, sm: 1, md: 2},
                paddingBottom: {xs: 2, sm: 3, md: 4}
            }}>
                Domestic debit card (ATM)
            </Typography>

            <TextField
                label="Card number"
                variant="outlined"
                value={cardnumber}
                onChange={onChangeCardnumber}
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
                slotProps={{
                    htmlInput: {
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        maxLength: 16
                    }
                }}
            />

            <TextField
                label="Cardholder's name"
                variant="outlined"
                helperText="Enter cardholder's name (without accents)"
                value={cardname}
                onBlur={() => {
                    setCardname(cardname.trim())
                }}
                onChange={onChangeCardname}
                sx={{
                    width: '100%',
                    marginTop: 4,
                    marginBottom: 3,
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
                slotProps={{
                    formHelperText: {
                        sx: {
                            color: '#fff',
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: 13
                        }
                    }
                }}
            />

            <TextField
                label="Issue date"
                variant="outlined"
                value={issuedate}
                onChange={onChangeIssuedate}
                placeholder="MM/YY"
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

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                paddingTop: 5
            }}>
                <Button sx={{
                    textTransform: 'none',
                    bgcolor: '#999',
                    width: {xs: '40%', sm: "30%"},
                    padding: 1
                }}
                    onClick={() => navigate("/cart")}
                >
                    <Typography sx={{
                        color: '#fff',
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 15, md: 18}
                    }}>
                        Cancel Payment
                    </Typography>
                </Button>

                <Button sx={{
                    textTransform: 'none',
                    background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                    width: {xs: '40%', sm: '30%'},
                    padding: 1,
                    color: '#fff'
                }}
                    onClick={handleConfirm}
                >
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 15, md: 18}
                    }}>
                        Countinue
                    </Typography>

                    <NavigateNext sx={{
                        fontSize: 20
                    }}/>
                </Button>
            </Box>
        </Box>
    )
}

export default FillPayment;