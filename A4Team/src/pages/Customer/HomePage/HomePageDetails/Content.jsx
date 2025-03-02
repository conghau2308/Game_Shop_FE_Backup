import { Rating, Typography, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

function Content() {
    return (
        <Box sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
            // width: { sm: "100vw", md: "100vw" },
            justifyContent: "center",
            bgcolor: "#3d3d3d",
            height: { sm: "240px", md: "350px" },
        }}>
            <Box sx={{
                width: { sm: "95vw", md: "90vw" },
                display: "flex",
                justifyContent: "center",
                height: { sm: "240px", md: "350px" },
                paddingLeft: {sm: 3, md: 10, lg: 20},
                paddingRight: {sm: 3, md: 10, lg: 20}
            }}>
                <Box sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "flex-end",
                }}>
                    <img
                        src="https://www.instant-gaming.com/themes/igv2/modules/streamerBanner/images/partners-avatar2-en.png"
                        alt="Partner Avatar"
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                        sx={{
                            width: {md: "100%" },
                            height: {sm: "80%"}
                        }}
                    />
                </Box>

                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Rating
                                defaultValue={5}
                                icon={<StarIcon sx={{ fontSize: {sm: "25px"}}} />}
                                readOnly
                            />
                        </Box>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "20px 0px 20px 0px"
                        }}>
                            <Typography sx={{
                                fontSize: {sm: "15px", md: "21px"},
                                color: "#999",
                                display: "flex",
                                textAlign: "center"
                            }}>
                                Instant Gaming is an amazing platform to buy your PC, PlayStation, Xbox and Switch games cheaper with a 24/7 instant delivery!
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box sx={{
                                background: "linear-gradient(10deg, #ff8000, transparent) #ff4020",
                                width: {sm: "200px", md: "250px"},
                                height: {sm: "40px", md: "60px"},
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "5px"
                            }}>
                                <Typography sx={{
                                    fontSize: {sm: "15px", md: "18px"},
                                    color: "white"
                                }}> 1,536,036 user feedbacks </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Content;