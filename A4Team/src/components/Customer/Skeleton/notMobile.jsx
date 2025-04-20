import { Card, Grid2, Skeleton } from "@mui/material";


function NotMobileSkeleton({ number, size }) {
    return (
        <Grid2 container spacing={4} justifyContent="center">
            {[...Array(number)].map((_, i) => (
                <Grid2 key={i} size={size}>
                    <Card sx={{
                        bgcolor: "#3d3d3d"
                    }}>
                        <Skeleton
                            variant="rectangular"
                            height={180}
                            sx={{ width: "100%", borderRadius: "10px" }}
                            animation="wave"
                        />
                        <Skeleton
                            height={10}
                            width='80%'
                            animation='wave'
                        />
                        <Skeleton
                            height={10}
                            width='100%'
                            animation='wave'
                        />
                        <Skeleton
                            height={30}
                            width='90%'
                            animation='wave'
                        />
                    </Card>
                </Grid2>
            ))}
        </Grid2>
    )
}

export default NotMobileSkeleton;