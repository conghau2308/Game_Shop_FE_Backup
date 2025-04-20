import { Star } from "@mui/icons-material";
import { Rating, Typography, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


function CartFooter() {
    return (
        <Box sx={{
            display: 'flex',
            padding: '25px 0',
            bgcolor: '#141414',
            color: "#fff",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography sx={{
                fontFamily: 'barlow-regular',
                fontSize: {xs: 16, sm: 18}
            }}>
                Excellent
            </Typography>

            <Rating
                value={4.7}
                readOnly
                precision={0.5}
                icon={<StarIcon sx={{ color: "rgb(29, 159, 22)", fontSize: {xs: 20, sm: 23}}} />}
                emptyIcon={<StarIcon sx={{ color: "#fff", fontSize: {xs: 20, sm: 23} }} />}
                sx={{
                    border: "1px solid #fff",
                    padding: 0.2,
                    marginLeft: 1.5,
                    marginRight: {xs: 1, sm: 1.5}
                }}
            />

            <Typography sx={{
                fontFamily: 'barlow-regular',
                fontSize: 13,
                display: {xs: "none", sm: "flex"}
            }}>
                745.402 reviews on
            </Typography>

            <Star sx={{
                color: "rgb(29, 159, 22)",
                marginLeft: {xs: 0, sm: 0.5},
                fontSize: {xs: 20, sm: 23}
            }}/>

            <Typography sx={{
                fontFamily: 'barlow',
                fontSize: {xs: 12, sm: 13},
                fontWeight: 600
            }}>
                Trustpilot
            </Typography>
        </Box>
    )
}

export default CartFooter;