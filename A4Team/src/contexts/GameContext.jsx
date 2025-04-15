import { createContext, useContext, useEffect, useState } from "react";
import { getGameWithDetailByGameIdService } from "../api/gameListService";


const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider ({ children, gameId }) {
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        const fetchGames = async () => {
            const res = await getGameWithDetailByGameIdService(gameId);
            if (res.statusCode === 200) {
                setProduct(res.data);
            }
            else {
                console.log("Error fetching details data of game: ", res.errors);
            }
        }
        fetchGames();
    }, [gameId])

    return (
        <GameContext.Provider value={{ product }}>
            {children}
        </GameContext.Provider>
    )
}