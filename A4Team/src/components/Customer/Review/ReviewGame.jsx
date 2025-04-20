import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useAuthStore } from "../../../hooks/User";
import { useStoreAlert } from "../../../hooks/alert";
import { ReviewGameServiceSubmit } from "../../../api/reviewsService";
import { useState } from "react";


const ReviewTheGame = ({ item, isOrder }) => {
    const id = isOrder ? item.orderId : item.gameId;

    const [islike, setIslike] = useState({});
    const [comment, setComment] = useState({});
    const { callAlert, callErrorAlert, callWarningAlert } = useStoreAlert();
    const { profile } = useAuthStore();
    
    const isTablet = useMediaQuery("(max-width:900px");

    const handleLike = (orderID, value) => {
        setIslike((prev) => ({
            ...prev,
            [orderID]: prev[orderID] === value ? null : value
        }));
    };

    const handleReview = async (data) => {
        const ID = isOrder ? data.orderId : data.gameId;

        const currentComment = comment[ID];
        const currentStatus = islike[ID];

        if (!currentComment || currentComment.trim() === "" || !currentStatus) {
            callWarningAlert("Please select Like or Dislike and provide a comment before submitting.");
            return;
        };

        const formData = {
            userId: profile.data.id,
            gameId: data.gameId,
            // createdAt: new Date(),
            status: currentStatus,
            useFul: 0,
            comment: currentComment
        };

        try {
            const response = await ReviewGameServiceSubmit(formData);

            if (response.statusCode === 200) {
                console.log("Review game success");
                callAlert("Thank you for your feedback! Your review has been submitted successfully.");
                setComment((prev) => ({
                    ...prev,
                    [ID]: ""
                }));
    
                setIslike((prev) => ({
                    ...prev,
                    [ID]: null
                }));
            }
            else {
                console.log("Review failed", response.message);
                callErrorAlert("Sorry, something went wrong while submitting your review.");
            }
        }
        catch (error) {
            console.log("Error: ", error);
            callErrorAlert("An unexpected error occurred. Please try again later.");
        }
    }

    return (
        <Box sx={{
            bgcolor: "#323232",
            color: "#fff",
            display: 'flex',
            width: '100%',
            borderRadius: '10px',
            paddingTop: 2,
            paddingBottom: 2
        }}>
            <Box sx={{
                width: '20%',
                justifyItems: 'center',
                alignContent: 'center',
                borderRight: '1px solid #999',
                height: '50%',
                alignSelf: 'center',
                display: { xs: 'none', sm: 'block' }
            }}>
                <Typography sx={{
                    fontFamily: 'barlow-regular',
                    fontSize: { sm: 15, md: 20 },
                    height: '35px',
                    alignContent: 'center'
                }}>
                    Review the game
                </Typography>
            </Box>

            <Box sx={{
                width: { xs: '100%', sm: '80%' },
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 2,
                    flexDirection: { xs: 'column', sm: 'row' }
                }}>
                    <Typography sx={{
                        fontFamily: 'barlow-regular',
                        fontSize: { xs: 12, sm: 13, md: 16 },
                        marginRight: 2,
                        color: '#999'
                    }}>
                        Did you like the game or are you disappointed? Say so
                    </Typography>

                    <Box sx={{
                        marginTop: { xs: 1, sm: 0 }
                    }}>
                        <Button sx={{
                            borderRadius: 100,
                            height: { xs: 30, md: 40 },
                            minWidth: { xs: 50, md: 60 },
                            border: islike[id] === "like" ? '1px solid #fff' : '1px solid rgb(0, 149, 0)',
                            marginRight: { xs: 1, md: 3 },
                        }}
                            onClick={() => handleLike(id, "like")}
                        >
                            <ThumbUpOutlined sx={{
                                color: 'rgb(0, 149, 0)',
                                fontSize: { xs: 20, md: 25 }
                            }} />
                        </Button>

                        <Button sx={{
                            borderRadius: 100,
                            height: { xs: 30, md: 40 },
                            minWidth: { xs: 50, md: 60 },
                            border: islike[id] === "dislike" ? '1px solid #fff' : '1px solid rgb(215, 23, 23)'
                        }}
                            onClick={() => handleLike(id, "dislike")}
                        >
                            <ThumbDownOutlined sx={{
                                color: 'rgb(215, 23, 23)',
                                fontSize: { xs: 20, md: 25 }
                            }} />
                        </Button>
                    </Box>
                </Box>

                <Box sx={{
                    width: { xs: '90%', sm: '80%' },
                    justifySelf: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' }
                }}>
                    <Box sx={{
                        width: { xs: '100%', sm: '85%' }
                    }}>
                        <TextField
                            type="text"
                            variant="outlined"
                            multiline
                            value={comment[id] || ""}
                            onChange={(e) =>
                                setComment((prev) => ({
                                    ...prev,
                                    [id]: e.target.value,
                                }))
                            }
                            minRows={isTablet ? 2 : 3}
                            maxRows={isTablet ? 3 : 5}
                            fullWidth
                            placeholder="Type your review here..."
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
                                    fontFamily: "barlow-regular",
                                    fontSize: { xs: 13, sm: 16 }
                                },
                                "& .MuiInputBase-inputMultiline": {
                                    overflowY: "auto",
                                    "&::-webkit-scrollbar": {
                                        width: "4px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        backgroundColor: "#999",
                                        borderRadius: "10px",
                                    },
                                    "&::placeholder": {
                                        fontSize: { xs: 13, sm: 16 },
                                        fontFamily: 'barlow',
                                        fontWeight: 600
                                    }
                                }
                            }}
                        />
                    </Box>

                    <Button sx={{
                        textTransform: 'none',
                        background: 'linear-gradient(10deg, #ff8000, transparent) #ff4020',
                        height: '60%',
                        padding: 1,
                        minWidth: { sm: '10%', md: '12%' },
                        marginTop: { xs: 2, sm: 0 }
                    }}
                        onClick={() => handleReview(item)}
                    >
                        <Typography sx={{
                            fontFamily: 'barlow-regular',
                            fontSize: { xs: 13, sm: 14, md: 16 },
                            color: '#fff'
                        }}>
                            Submit
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ReviewTheGame;