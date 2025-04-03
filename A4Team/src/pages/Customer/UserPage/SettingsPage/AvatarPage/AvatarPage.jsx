import { AddAPhotoOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Grid2, TextField, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";


function AvatarPage() {
    const [nickname, setNickname] = useState("");
    const [avatar, setAvatar] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [country, setCountry] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [resgistration, setRegistration] = useState("");
    const [openTooltip, setOpenTooltip] = useState(false);

    useEffect(() => {
        const fakedata = {
            nickname: "gamer-2969060",
            avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
            firstname: "Loid",
            lastname: "Forger",
            country: "Vietnam",
            birthdate: "2013-01-01",
            resgistration: "February 7, 2025 at 5:44 PM"
        };
        setNickname(fakedata.nickname);
        setAvatar(fakedata.avatar);
        setFirstname(fakedata.firstname);
        setLastname(fakedata.lastname);
        setCountry(fakedata.country);
        setBirthdate(fakedata.birthdate);
        setRegistration(fakedata.resgistration);
    }, [])

    return (
        <Box>
            <Box sx={{
                color: '#fff',
                width: '90%',
                display: 'flex',
                justifySelf: 'center',
                flexDirection: {xs: 'column', md: 'row'}
            }}>
                <Box sx={{
                    width: {xs: '100%', md: '30%'}
                }}>
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 16, md: 19},
                        marginBottom: {xs: 1, sm: 2}
                    }}>
                        Profile picture
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer'
                    }}>
                        <Avatar
                            src={avatar}
                            sx={{
                                width: {xs: 40, sm: 60},
                                height: {xs: 40, sm: 60},
                                ':hover': {
                                    boxShadow: '0 0 0 2px #ff5400',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        />

                        <AddAPhotoOutlined sx={{
                            marginLeft: 2,
                            marginRight: 1,
                            fontSize: {xs: 20, sm: 30}
                        }} />

                        <Typography sx={{
                            fontFamily: 'barlow',
                            fontSize: {xs: 13, sm: 16},
                            fontWeight: 600,
                            color: '#999'
                        }}>
                            .jpg .png
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    width: {xs: '100%', md: '70%'},
                    marginTop: {xs: 1, md: 0}
                }}>
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: {sm: 16, md: 19},
                        marginBottom: {xs: 1, sm: 2}
                    }}>
                        Nickname
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <TextField
                            variant="outlined"
                            type="text"
                            fullWidth
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
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
                                    bgcolor: "#272727",
                                    fontFamily: "barlow-regular",
                                    fontSize: { xs: 13, sm: 15, md: 17 }
                                }
                            }}
                        />

                        <Button sx={{
                            textTransform: 'none',
                            background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                            width: 120,
                            marginLeft: 2,
                            borderRadius: '5px'
                        }}>
                            <Typography sx={{
                                fontFamily: 'barlow-regular',
                                fontSize: {xs: 15, md: 17},
                                color: '#fff'
                            }}>
                                Submit
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                width: '90%',
                justifySelf: 'center'
            }}>
                <Typography sx={{
                    fontFamily: 'barlow-regular',
                    fontSize: {xs: 16, md: 19},
                    marginBottom: 3,
                    color: '#fff',
                    marginTop: {xs: 3, sm: 5}
                }}>
                    Manage my personal information
                </Typography>

                <Grid2 container spacing={{xs: 2, md: 3}} justifyContent="center">
                    <Grid2 size={{xs: 12, sm: 6}}>
                        <TextField
                            variant="outlined"
                            type="text"
                            fullWidth
                            label="First name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true
                                }
                            }}
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
                                    bgcolor: "#272727",
                                    fontFamily: "barlow-regular",
                                    fontSize: { xs: 13, sm: 15, md: 17 }
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

                    <Grid2 size={{xs: 12, sm: 6}}>
                        <TextField
                            variant="outlined"
                            type="text"
                            fullWidth
                            label="Last name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true
                                }
                            }}
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
                                    bgcolor: "#272727",
                                    fontFamily: "barlow-regular",
                                    fontSize: { xs: 13, sm: 15, md: 17 }
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

                    <Grid2 size={{xs: 12, sm: 6}}>
                        <Tooltip
                            title="If you want to change your country, please contact your customer support"
                            open={openTooltip}
                            onClose={() => setOpenTooltip(false)}
                            disableHoverListener
                            disableFocusListener
                            disableTouchListener
                            slotProps={{
                                tooltip: {
                                    sx: {
                                        fontSize: 15,
                                        fontFamily: 'barlow',
                                        fontWeight: 600
                                    }
                                }
                            }}
                        >
                            <TextField
                                variant="outlined"
                                type="text"
                                fullWidth
                                label="Country"
                                value={country}
                                onFocus={() => {
                                    setOpenTooltip(true)
                                }}
                                onBlur={() => setOpenTooltip(false)}
                                slotProps={{
                                    htmlInput: {
                                        readOnly: true
                                    },
                                    inputLabel: {
                                        shrink: true
                                    }
                                }}
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
                                        bgcolor: "#272727",
                                        fontFamily: "barlow-regular",
                                        fontSize: { xs: 13, sm: 15, md: 17 }
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
                        </Tooltip>
                    </Grid2>

                    <Grid2 size={{xs: 12, sm: 6}}>
                        <TextField
                            variant="outlined"
                            type="date"
                            fullWidth
                            label="Birthdate"
                            value={birthdate}
                            placeholder={`${birthdate}`}
                            onChange={(e) => setBirthdate(e.target.value)}
                            slotProps={{
                                inputLabel: {
                                    shrink: true
                                }
                            }}
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
                                    bgcolor: "#272727",
                                    fontFamily: "barlow-regular",
                                    fontSize: { xs: 13, sm: 15, md: 17 }
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

                    <Grid2 size={12}>
                        <Typography sx={{
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: {xs: 13, md: 15},
                            color: '#999'
                        }}>
                            Registration date: {resgistration}
                        </Typography>
                    </Grid2>

                    <Grid2 size={{xs: 8, sm: 5, lg: 4}}>
                        <Button sx={{
                            textTransform: 'none',
                            background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                            width: "100%",
                            borderRadius: '5px',
                            padding: 2
                        }}>
                            <Typography sx={{
                                fontFamily: 'barlow-regular',
                                fontSize: {xs: 15, md: 17},
                                color: '#fff'
                            }}>
                                Change information
                            </Typography>
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    )
}

export default AvatarPage;