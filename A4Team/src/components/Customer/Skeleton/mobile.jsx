import { Card, ImageList, ImageListItem, Skeleton } from "@mui/material";


function MobileSkeleton() {
    return (
        <ImageList sx={{
            flexWrap: "nowrap",
            overflowX: "scroll",
            display: "flex",
            flexDirection: "row"
        }} gap={20}>
            {[...Array(5)].map((_, i) => (
                <ImageListItem>
                    <Card sx={{
                        bgcolor: '#3d3d3d',
                        width: '300px',
                        height: '100%'
                    }} key={i}>
                        <Skeleton
                            variant="rectangular"
                            width='100%'
                            height={200}
                            sx={{ borderRadius: "10px" }}
                            animation="wave"
                        />
                        <Skeleton
                            height={20}
                            width='80%'
                            animation='wave'
                        />
                        <Skeleton
                            height={20}
                            width='100%'
                            animation='wave'
                        />
                    </Card>
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default MobileSkeleton;