import { Box, Skeleton, Typography } from "@mui/material";
import TrendingGames from "../../../../components/Customer/TrendingGames/TrendingGames";
import { useEffect, useState } from "react";
import { getLimitedGameWithPriceService } from "../../../../api/gameWithPriceService";
import { useLocation } from "react-router-dom";
import { getLimitedGameWithPlatformService } from "../../../../api/gameListService";

function GamePlatFormComponent({ plafformName }) {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await getLimitedGameWithPlatformService(plafformName, 9);
                if (res.statusCode === 200) {
                    setTrending(res.data);
                    console.log(res.data)
                }
                else {
                    console.log("Error fetching games: ", res.errors)
                }
            }
            catch (error) {
                console.log("Error: ", error);
            }
        };
        fetchGames();
    }, []);

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 3,
                marginBottom: trending[0] ? 2 : 0
            }}>
                <Typography sx={{
                    color: "#fff",
                    fontFamily: 'barlow-regular',
                    fontSize: { xs: 30, sm: 32 }
                }}>
                    {plafformName}
                </Typography>
            </Box>

            <Box sx={{
                paddingLeft: { xs: 2, sm: 2, md: 4, lg: 20 },
                paddingRight: { xs: 2, sm: 2, md: 4, lg: 20 },
                marginTop: trending[0] ? { xs: 3, sm: 5 } : 0,
                marginBottom: { xs: 2, sm: 5 }
            }}>
                {trending[0] ? (
                    <Box sx={{
                        backgroundImage: `url(${trending[0]?.background})`,
                        height: { xs: '200px', sm: '250px', md: '300px' },
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        alignContent: 'center',
                        borderRadius: '15px'
                    }}>
                        <Box sx={{
                            marginLeft: { xs: 3, sm: 5, md: 10 }
                        }}>
                            <Typography sx={{
                                color: "#fff",
                                fontFamily: 'barlow-regular',
                                fontSize: { xs: 20, sm: 32 }
                            }}>
                                {trending[0]?.name}
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: 1
                            }}>
                                <Typography sx={{
                                    bgcolor: "#ff5400",
                                    clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%, 0 100%)",
                                    borderRadius: "5px",
                                    fontSize: { xs: 15, sm: 20 },
                                    color: "white",
                                    fontFamily: "barlow-regular",
                                    width: { xs: 50, sm: 60 },
                                    height: { xs: 25, sm: 30 },
                                    paddingLeft: 1,
                                }}>
                                    -{trending[0]?.discount_percent}%
                                </Typography>

                                <Typography sx={{
                                    fontFamily: 'barlow-regular',
                                    fontSize: { xs: 20, sm: 28 },
                                    color: '#fff',
                                    marginLeft: { xs: 2, sm: 4 }
                                }}>
                                    {trending[0]?.final_price}$
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    <Skeleton sx={{
                        height: { xs: '250px', sm: '300px', md: '450px' },
                        width: '100%',
                        borderRadius: '15px',
                        bgcolor: '#323232',
                        alignSelf: 'flex-start'
                    }}
                        animation='wave'
                    />
                )}
            </Box>

            <Box sx={{
                marginBottom: 10
            }}>
                <TrendingGames trending={trending} />
            </Box>
        </Box>
    );
}

export default GamePlatFormComponent;
