import { Block, CancelOutlined } from "@mui/icons-material";
import { Alert, Autocomplete, Box, Grid2, TextField, Typography, Snackbar, AlertTitle, IconButton, Checkbox, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { RegisterServiceSubmit } from "../../../api/auth/registerService";
import { useStoreAlert } from "../../../hooks/alert";


function SignUpPage() {
    const [nation, setNation] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const countryList = nation.map((option) => option.name);
    const [openAlert, setOpenAlert] = useState(false);
    const [isfullinfor, setIsfullinfor] = useState(false);
    const [isChecked, setIsCkecked] = useState(false);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [country, setCountry] = useState(0);

    const { callWarningAlert } = useStoreAlert();

    useEffect(() => {
        const data = [
            {
                name: "Vietnam",
                id: 0
            },
            {
                name: "United States",
                id: 1
            },
            {
                name: "Japan",
                id: 2
            },
            {
                name: "Thailand",
                id: 3
            },
            {
                name: "India",
                id: 4
            },
            {
                name: "China",
                id: 5
            },
            {
                name: "France",
                id: 6
            },
            {
                name: "Laos",
                id: 7
            },
            {
                name: "Peru",
                id: 8
            },
        ];
        setNation(data);
    }, []);


    const handleRegister = async () => {
        if (!email || !password || !firstname || !lastname || !birthdate) {
            callWarningAlert("Please fill in all the fields.");
            return;
        }

        if (!isChecked) {
            callWarningAlert("Please agree to the terms and privacy policy to complete the registration.");
            return;
        }

        const formData = {
            firstName: firstname,
            lastName: lastname,
            email,
            password,
            birthDate: birthdate,
            country_id: country
        };

        console.log("Form data: ", formData);

        try {
            const response = await RegisterServiceSubmit(formData);

            console.log("Response: ", response);

            if (response.statusCode === 200) {
                navigate("/login");
            }
            else {
                console.log("Failed: ", response.message);
            }
        }
        catch (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <Box sx={{
            height: "100vh",
            boxSizing: "border-box",
            padding: 0,
            margin: "-8px",
            position: "relative"
        }}>
            <IconButton sx={{
                position: "absolute",
                top: 10, right: 10,
            }}
                onClick={() => navigate("/login")}
            >
                <CloseIcon sx={{
                    color: "white",
                    fontSize: 35
                }} />
            </IconButton>

            <Grid2 container sx={{
                padding: 0,
                height: "100%",
                width: "100%"
            }}>
                <Grid2 size={{ xs: 12, sm: 6 }} sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#323232",
                    padding: 0,
                    height: "100%"
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}>
                        <Box onClick={() => navigate("/homepage")}>
                            <img src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
                                style={{
                                    height: "auto", maxWidth: "150px", cursor: "pointer",
                                    position: "absolute",
                                    left: 30,
                                    top: 25
                                }}
                            />
                        </Box>

                        <Typography sx={{
                            fontFamily: "barlow-regular",
                            fontSize: { xs: 25, sm: 32 },
                            color: "white",
                            paddingBottom: 2,
                            borderBottom: "1px solid #999",
                        }}>
                            Create An Account
                        </Typography>

                        <Grid2 container justifyContent="center" spacing={{ xs: 2, sm: 3 }} padding={4} paddingBottom={{ xs: 2, sm: 4 }} paddingTop={{ xs: 2, sm: 4 }}
                            sx={{
                                width: "90%",
                            }}>
                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Your Email"
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
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
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Your Password"
                                    type="password"
                                    onChange={(e) => SetPassword(e.target.value)}
                                    fullWidth
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
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    type="text"
                                    onChange={(e) => setFirstname(e.target.value)}
                                    fullWidth
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
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    type="text"
                                    onChange={(e) => setLastname(e.target.value)}
                                    fullWidth
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
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    id="outlined-basic"
                                    label="Birthdate"
                                    type="date"
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    fullWidth
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
                                            },
                                            bgcolor: "#272727"
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "white",
                                            fontFamily: "barlow-regular",
                                            opacity: birthdate === "" ? 0 : 1,
                                            "&:focus": {
                                                opacity: 1
                                            },
                                            "&::-webkit-calendar-picker-indicator": {
                                                filter: "invert(1)"
                                            }
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
                            </Grid2>

                            <Grid2 size={{ xs: 12, sm: 6 }}>
                                <Autocomplete
                                    options={nation}
                                    value={nation.find((option) => option.id === country) || null}
                                    inputValue={inputValue}
                                    getOptionLabel={(option) => option.name}
                                    freeSolo={false}
                                    onChange={(event, newValue) => {
                                        if (newValue) {
                                            setCountry(newValue.id)
                                            setInputValue(newValue.name)
                                        }
                                        else {
                                            setCountry(null)
                                            setInputValue("Underfined")
                                        }
                                    }}
                                    onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                                    onBlur={() => {
                                        if (!nation.some((option) => option.name === inputValue)) {
                                            setInputValue("");
                                            setCountry(null);
                                            setOpenAlert(true);
                                        }
                                    }}
                                    onFocus={() => setOpenAlert(false)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Choose a country"
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
                            </Grid2>
                        </Grid2>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "90%",
                            paddingLeft: 5,
                            paddingBottom: 3,
                        }}>
                            <Checkbox sx={{
                                "&.Mui-checked": {
                                    color: "#ff5400"
                                }
                            }}
                                checked={isChecked}
                                onChange={(e) => setIsCkecked(e.target.checked)}
                            />

                            <Box sx={{
                                display: "flex",
                                color: "white"
                            }}>
                                <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
                                    I agree with the
                                </Typography>

                                <Link to="/signup/terms-of-use" style={{
                                    color: "white"
                                }}>
                                    <Typography sx={{
                                        "&:hover": {
                                            color: "#ff5400",
                                            textDecorationColor: "#ff5400",
                                            textDecoration: "underline"
                                        },
                                        padding: "0 3px 0 3px",
                                        fontSize: { xs: 12, sm: 15 }
                                    }}>
                                        Terms
                                    </Typography>
                                </Link>

                                <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
                                    and
                                </Typography>

                                <Link to="/privacy-policy" style={{
                                    color: "white"
                                }}>
                                    <Typography sx={{
                                        "&:hover": {
                                            color: "#ff5400",
                                            textDecorationColor: "#ff5400",
                                            textDecoration: "underline"
                                        },
                                        padding: "0 3px",
                                        fontSize: { xs: 12, sm: 15 }
                                    }}>
                                        Privacy policy
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>

                        <Button sx={{
                            textTransform: "none",
                            color: "white",
                            fontFamily: "barlow-regular",
                            background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                            fontSize: { xs: 15, sm: 20 },
                            width: "70%",
                            // opacity: isfullinfor === true ? 1 : 0.3
                        }}
                            // disabled={isfullinfor}
                            onClick={handleRegister}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid2>

                <Grid2 size={{ xs: 0, sm: 6 }} padding={0} sx={{
                    display: { xs: "none", sm: "flex" }
                }}>
                    <Box sx={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url('https://www.instant-gaming.com/themes/igv2/modules/register/images/wallpaper.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: 0
                    }}>
                    </Box>
                </Grid2>
            </Grid2>

            <Snackbar open={openAlert}>
                <Alert severity="error" action={
                    <IconButton onClick={() => setOpenAlert(false)} size="small" color="inherit">
                        <CancelOutlined />
                    </IconButton>
                }>
                    <AlertTitle>Error</AlertTitle>
                    Please select a valid country from the list.
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default SignUpPage;