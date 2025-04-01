import { LockOutlined } from "@mui/icons-material";
import { AppBar, Grid2, Step, StepConnector, StepLabel, Stepper, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import CustomStepIcon from "./CustomStepIcon";
import { useNavigate } from "react-router-dom";

function CartStepper({ activeStep }) {
    const steps = [
        "Shopping cart", "Payment", "Game activation"
    ];

    const navigate = useNavigate();

    return (
        <Box sx={{
            bgcolor: "#141414",
            width: "100%"
        }}>
            <Grid2 container justifyContent="space-evenly" sx={{
                alignItems: "center",
                paddingLeft: { sm: 0, lg: 4 },
                paddingRight: { sm: 0, lg: 4 }
            }} spacing={{ xs: 2, sm: 1 }}>
                <Grid2 size={{ sm: 3, md: 2.5 }} sx={{
                    display: { xs: "none", sm: "flex" }
                }}>
                    <Box
                        component="img"
                        src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
                        sx={{
                            width: { sm: "130px", md: "150px" },
                            height: "auto",
                            objectFit: "cover",
                            display: 'flex',
                            justifySelf: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => navigate("/homepage")}
                    />
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 9, md: 7, lg: 6 }} sx={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <Stepper activeStep={activeStep} sx={{
                        width: "100%"
                    }} connector={
                        <StepConnector
                            sx={{
                                '& .MuiStepConnector-line': {
                                    height: 2,
                                    backgroundColor: '#999',
                                    display: "block"
                                },
                                '&.Mui-active .MuiStepConnector-line': {
                                    backgroundColor: '#ff5400',
                                },
                                '&.Mui-completed .MuiStepConnector-line': {
                                    bgcolor: '#ff5400'
                                }
                            }}
                        />
                    }>
                        {steps.map((label, index) => (
                            <Step key={index}>
                                <StepLabel
                                    slots={{
                                        stepIcon: CustomStepIcon,
                                    }}
                                    slotProps={{
                                        label: {
                                            sx: {
                                                color: "#999",
                                            }
                                        }
                                    }}
                                    sx={{
                                        '& .MuiStepLabel-label': {
                                            color: '#999',
                                            fontFamily: "barlow-regular",
                                            fontSize: { xs: 13, sm: 15 },
                                            whiteSpace: "nowrap"
                                        },
                                        '& .MuiStepLabel-label.Mui-active': {
                                            color: '#fff'
                                        },
                                        '& .MuiStepLabel-label.Mui-completed': {
                                            color: '#999',
                                        },
                                    }}
                                > {label} </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid2>

                <Grid2 size={{ md: 2.5, lg: 3 }} sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end"
                }}>
                    <Box sx={{
                        color: "#fff",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <LockOutlined sx={{
                            fontSize: 33,
                            color: "rgba(0, 255, 0, 1)",
                            paddingRight: 1
                        }} />

                        <Box>
                            <Typography sx={{
                                fontFamily: "barlow-regular",
                                fontSize: 15
                            }}>
                                Secure payment
                            </Typography>

                            <Typography sx={{
                                fontSize: 12,
                                color: "#999",
                                fontFamily: "barlow-regular"
                            }}>
                                256-bit SSL Secured
                            </Typography>
                        </Box>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
};

export default CartStepper;