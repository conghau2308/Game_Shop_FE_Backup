import { CancelOutlined, NavigateNext } from "@mui/icons-material";
import { Box, Typography, Autocomplete, TextField, Snackbar, Alert, IconButton, AlertTitle, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function SelectBankPage() {
    const [bank, setBank] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fakedata = [
            {
                name: "Vietcombank"
            },
            {
                name: "Techcombank"
            },
            {
                name: "BIDV"
            },
            {
                name: "Vietinbank"
            },
            {
                name: "Agribank"
            },
            {
                name: "MBBank"
            }
        ];
        setBank(fakedata);
    }, [])

    const bankList = bank.map((item) => item.name);
    const [bankTransfer, setBankTransfer] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [openAlert, setOpenAlert] = useState(false);

    const handleNextStep = () => {
        if (bankTransfer) {
            navigate("/make-payment/fill-payment")
        }
    }

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Box
                component="img"
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-VNPAY-QR-1.png"
                sx={{
                    width: {xs: "100px", sm: "150px"},
                    height: 'auto',
                    objectFit: 'cover'
                }}
            />
            <Typography sx={{
                color: '#fff',
                fontFamily: 'barlow-regular',
                fontSize: {xs: 15, sm: 20},
                paddingTop: {xs: 1, sm: 3},
                paddingBottom: {xs: 1, sm: 3}
            }}>
                Domestic debit card (ATM card) and bank account
            </Typography>

            <Box>
                <Autocomplete
                    options={bankList}
                    value={bankTransfer}
                    inputValue={inputValue}
                    fullWidth
                    freeSolo={false}
                    onChange={(event, newValue) => setBankTransfer(newValue)}
                    onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                    onBlur={() => {
                        if (!bankList.includes(inputValue)) {
                            setInputValue("");
                            setBankTransfer(null);
                            setOpenAlert(true);
                        }
                    }}
                    onFocus={() => setOpenAlert(false)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a bank"
                            id="outlined-basic"
                            sx={{
                                "& .MuiInputBase-input": { color: "white" },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: "white" },
                                    "&:hover fieldset": { borderColor: "#ff5400" },
                                    "&.Mui-focused fieldset": { borderColor: "#ff5400" }
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
                                    bgcolor: "#272727",
                                    fontFamily: "barlow-regular"
                                },
                            }}
                        />
                    )}
                    slotProps={{
                        popper: {
                            sx: {
                                "& .MuiAutocomplete-listbox": {
                                    backgroundColor: "rgba(24, 18, 18, 0.8)",
                                    maxHeight: "140px",
                                    fontFamily: "barlow-regular",
                                    color: "white",
                                    borderRadius: 0,
                                    "&::-webkit-scrollbar": {
                                        width: "5px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#999",
                                        borderRadius: "10px"
                                    },
                                },
                                "& .MuiAutocomplete-option": {
                                    "&:hover": {
                                        bgcolor: "#ff5400 !important",
                                    }
                                }
                            }
                        }
                    }}
                />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: {xs: 2, sm: 6}
                }}>
                    <Button sx={{
                        textTransform: 'none',
                        background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                        width: '50%',
                        color: '#fff',
                        padding: 1
                    }}
                        onClick={handleNextStep}
                    >
                        <Typography sx={{
                            fontFamily: 'barlow-regular',
                            fontSize: {xs: 15, md: 18},
                        }}>
                            Next
                        </Typography>

                        <NavigateNext sx={{
                            fontSize: 20
                        }} />
                    </Button>
                </Box>
            </Box>

            <Snackbar open={openAlert}>
                <Alert severity="error" action={
                    <IconButton onClick={() => setOpenAlert(false)} size="small" color="inherit">
                        <CancelOutlined />
                    </IconButton>
                }>
                    <AlertTitle>Error</AlertTitle>
                    Please select a valid bank from the list.
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default SelectBankPage;