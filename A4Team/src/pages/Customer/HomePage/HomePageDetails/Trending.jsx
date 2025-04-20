import { Button, Card, CardContent, Typography, Box, CardMedia, Grid2, CardActionArea, useMediaQuery, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLimitedGameService } from "../../../../api/gameListService";
import { getLimitedGameWithPriceService } from "../../../../api/gameWithPriceService";
import useNavigateProductDetail from "../../../../ultils/navigate";
import TrendingGames from "../../../../components/Customer/TrendingGames/TrendingGames";
import { useStoreAlert } from "../../../../hooks/alert";

function Trending() {
    const [trending, setTrending] = useState([]);
    const {callErrorAlert} = useStoreAlert();

    useEffect(() => {
        const fetchGames = async () => {
            const res = await getLimitedGameWithPriceService(8);
            if (res?.statusCode === 200) {
                setTrending(res.data);
                // console.log("trending: ", res.data)
            }
            else {
                console.log("Error fetching games:", res.errors);
                callErrorAlert("Failed to load list of game. Please try again later.");
            }
        }
        fetchGames();
    }, []);

    return (
        <TrendingGames trending={trending}/>
    )
}

export default Trending;