import { Box, Grid2, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";


function SecurityPage() {
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    const [newEmail, setNewEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [currentPassforEmail, setCurrentPassforEmail] = useState("");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [currentPassforPass, setCurrentPassforPass] = useState("");


    useEffect(() => {
        const data = {
            email: "voconghau509@gmail.com",
            password: "12345"
        };
        setEmail(data.email);
        SetPassword(data.password);
    }, [])

    return (
        <Box sx={{
            width: { sm: '95%', lg: '90%' },
            justifySelf: 'center',
            color: '#fff'
        }}>
            <Box>
                <Typography sx={{
                    fontFamily: 'barlow-regular',
                    fontSize: { xs: 18, md: 23 }
                }}>
                    Account security
                </Typography>

                <Typography sx={{
                    fontFamily: 'barlow',
                    fontWeight: 600,
                    color: '#999',
                    fontSize: {xs: 13, sm: 16}
                }}>
                    {email}
                </Typography>
            </Box>

            <Grid2 container justifyContent="center" marginTop={5} spacing={{ xs: 4, sm: 0 }}>
                <Grid2 size={{ xs: 12, sm: 6 }} sx={{
                    borderRight: { xs: 'none', sm: '1px solid rgba(154, 151, 151, 0.28)' }
                }}>
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: { xs: 17, md: 19 },
                        marginBottom: { xs: 1, sm: 2 },
                        textAlign: { xs: 'center', sm: 'unset' }
                    }}>
                        Change your Email
                    </Typography>

                    <Grid2 container spacing={{ xs: 2, sm: 4 }} justifyContent="left">
                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="New Email"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="Confirm your new Email"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="Your current password"
                                value={currentPassforEmail}
                                onChange={(e) => setCurrentPassforEmail(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }} sx={{
                            justifyContent: 'center',
                            display: 'flex'
                        }}>
                            <Button sx={{
                                textTransform: 'none',
                                background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                                width: { xs: '25%', sm: '40%' },
                                padding: 1.5,
                                borderRadius: '5px'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'barlow-regular',
                                    fontSize: { xs: 15, md: 17 },
                                    color: '#fff'
                                }}>
                                    Submit
                                </Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 6 }}>
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: { xs: 17, md: 19 },
                        marginBottom: { xs: 1, sm: 2 },
                        marginLeft: { sm: 3, md: 4 },
                        textAlign: { xs: 'center', sm: 'unset' }
                    }}>
                        Change your password
                    </Typography>

                    <Grid2 container spacing={{ xs: 2, sm: 4 }} justifyContent="right">
                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="Your current password"
                                value={currentPassforPass}
                                onChange={(e) => setCurrentPassforPass(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }}>
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                placeholder="Corfirm your new Password"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            border: "2px solid rgba(111, 110, 110, 0.63)",
                                            borderRadius: '5px'
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
                                        bgcolor: "#1d1d1d",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 },
                                        "&::placeholder": {
                                            fontSize: { xs: 13, sm: 16 },
                                            fontFamily: 'barlow',
                                            fontWeight: 600
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

                        <Grid2 size={{ xs: 12, sm: 11 }} sx={{
                            justifyContent: 'center',
                            display: 'flex'
                        }}>
                            <Button sx={{
                                textTransform: 'none',
                                background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                                width: { xs: '25%', sm: '40%' },
                                padding: 1.5,
                                borderRadius: '5px'
                            }}>
                                <Typography sx={{
                                    fontFamily: 'barlow-regular',
                                    fontSize: { xs: 15, md: 17 },
                                    color: '#fff'
                                }}>
                                    Submit
                                </Typography>
                            </Button>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default SecurityPage;