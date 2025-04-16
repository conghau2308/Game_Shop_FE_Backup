import { Box, Grid2, Typography, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../../hooks/User";
import { changeEmailUser, changePasswordUser, getProfile } from "../../../../../api/profile";
import { useStoreAlert } from "../../../../../hooks/alert";
import { useNavigate } from "react-router-dom";


function SecurityPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const [newEmail, setNewEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [currentPassforEmail, setCurrentPassforEmail] = useState("");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [currentPassforPass, setCurrentPassforPass] = useState("");

    const { token, profile, setToken } = useAuthStore();

    const { callAlert, callErrorAlert, callWarningAlert } = useStoreAlert();

    const handleChangeEmail = async () => {
        if (newEmail !== confirmEmail) {
            callWarningAlert("The confirmation email must be identical to the email you entered. Please try again.");
            return;
        }

        const formData = {
            currentPassword: currentPassforEmail,
            newEmail: newEmail
        }

        try {
            const res = await changeEmailUser(token, formData);
            if (res.statusCode === 200) {
                const updatedEmail = await getProfile(res.token, setToken);
                callAlert("Your email has been changed successfully.")
            }
            else {
                if (res.errors && res.errors.some(err => err.message === "Token expired")) {
                    callErrorAlert("Your session has expired. Please log in again.");
                    navigate("/login")
                }
                else {
                    callErrorAlert("Failed to change your email. Please try again.")
                    console.log("Failed to change email: ", res.errors)
                }
            }
        }
        catch (error) {
            if (error?.response?.status === 401 || error?.message?.includes("expired")) {
                callErrorAlert("Your session has expired. Please log in again.");
                navigate("/login")
            }
            console.log("Errors: ", error);
            callErrorAlert("An unexpected error occurred. Please try again later.")
        }
    }


    const handleChangePassword = async () => {
        if (newPassword !== confirmPass) {
            callWarningAlert("The confirmation password must be identical to the password you entered. Please try again.");
            return;
        }

        const formData = {
            currentPassword: currentPassforPass,
            newPassword: newPassword
        }

        try {
            const res = await changePasswordUser(token, formData);
            if (res.statusCode === 200) {
                const updatedPassword = await getProfile(res.token, setToken);
                callAlert("Your password has been changed successfully.")
            }
            else {
                if (res.errors && res.errors.some(err => err.message === "Token expired")) {
                    callErrorAlert("Your session has expired. Please log in again.");
                    navigate("/login")
                }
                else {
                    callErrorAlert("Failed to change your password. Please try again.")
                    console.log("Failed to change password: ", res.errors)
                }
            }
        }
        catch (error) {
            if (error?.response?.status === 401 || error?.message?.includes("expired")) {
                callErrorAlert("Your session has expired. Please log in again.");
                navigate("/login")
            }
            console.log("Errors: ", error);
            callErrorAlert("An unexpected error occurred. Please try again later.")
        }
    }

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
                    fontSize: { xs: 13, sm: 16 }
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
                                type="email"
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
                                type="email"
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
                                type="email"
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
                            }}
                                onClick={() => handleChangeEmail()}
                            >
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
                                type="password"
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
                                type="password"
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
                                type="password"
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
                            }}
                                onClick={() => handleChangePassword()}
                            >
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