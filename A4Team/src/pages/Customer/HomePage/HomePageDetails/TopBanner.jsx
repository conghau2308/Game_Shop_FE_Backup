import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography, Box, Skeleton } from "@mui/material";
import { getLimitedGameService } from "../../../../api/gameListService";
import { getLimitedGameWithPriceService } from "../../../../api/gameWithPriceService";


function TopBanner() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        // const fakedata = [
        //     {
        //         name: "Monster Hunter Wilds",
        //         image: "https://gaming-cdn.com/img/products/16526/hcover/1920x620/16526.jpg?v=1740755480",
        //         discount: "-21%",
        //         price: "63.19"
        //     },
        //     {
        //         name: "Warhammer 40,000: Space Marine 2",
        //         image: "https://gaming-cdn.com/img/products/10140/pcover/1920x620/10140.jpg?v=1725274116",
        //         discount: "-37%",
        //         price: "37.19"
        //     },
        //     {
        //         name: "Monster Hunter Wilds Premium Deluxe Edition",
        //         image: "https://gaming-cdn.com/img/products/7930/pcover/1920x620/7930.jpg?v=1740755533",
        //         discount: "-37%",
        //         price: "37.19"
        //     },
        //     {
        //         name: "Life is Strange: Double Exposure",
        //         image: "https://gaming-cdn.com/img/products/6829/pcover/1920x620/6829.jpg?v=1730219640",
        //         discount: "-37%",
        //         price: "37.19"
        //     },
        //     {
        //         name: "Dragon Quest III HD-2D Remake",
        //         image: "https://gaming-cdn.com/img/products/17212/pcover/1920x620/17212.jpg?v=1731919790",
        //         discount: "-37%",
        //         price: "37.19"
        //     }
        // ];
        // setBanner(fakedata);

        const fetchBanner = async () => {
            const res = await getLimitedGameWithPriceService(5);
            if (res.statusCode === 200) {
                setBanner(res.data);
                console.log("Data banner: ", res.data)
            }
            else {
                console.log("Error fetching games for banner: ", res.errors)
            }
        }
        fetchBanner();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        customPaging: i => (
            <Box sx={{
                width: 4,
                height: 4,
                bgcolor: "black",
                borderRadius: "50%",
                ".slick-active &": {
                    bgcolor: "white",
                    transform: "scale(1.5)"
                },
                "&:hover": {
                    bgcolor: "white",
                    transform: "scale(1.5)"
                },
                marginTop: 2
            }} />
        )
    }

    return (
        <Box>
            {banner.length > 0 ? (
                <Box sx={{
                    paddingBottom: 3
                }}>
                    <Slider {...settings}>
                        {banner.map((item, index) => (
                            <Box key={index} sx={{
                                backgroundImage: `url(${item.background})`,
                                height: { sm: "350px", md: "500px" },
                                width: "auto",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                objectFit: "cover",
                                backgroundSize: "cover",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)",
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "center"
                            }}>
                                <Box sx={{
                                    paddingLeft: { lg: 20, sm: 3, xs: 2 },
                                    background: "radial-gradient(ellipse, rgba(0, 0, 0, 0.9) 10%, rgba(255, 255, 255, 0) 90%)",
                                    width: { lg: 650, md: 550, sm: 400, xs: 100 },
                                    height: 200,
                                    alignContent: "center",
                                }}>
                                    <Typography sx={{
                                        color: "white",
                                        fontSize: { md: 35, sm: 30, xs: 18 },
                                        fontFamily: "barlow-regular",
                                        width: { lg: 600, md: 500, sm: 400, xs: 200 },
                                        wordWrap: "break-word"
                                    }}>
                                        {item.name}
                                    </Typography>

                                    <Box sx={{
                                        display: "flex",
                                        width: { lg: 250, sm: 220, xs: 130 },
                                        justifyContent: "space-between",
                                        paddingTop: { sm: 2, xs: 1 }
                                    }}>
                                        <Typography sx={{
                                            bgcolor: "#ff5400",
                                            clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%, 0 100%)",
                                            width: { sm: 60, xs: 30 },
                                            borderRadius: "5px",
                                            fontSize: { md: 23, sm: 22, xs: 13 },
                                            fontFamily: "barlow-regular",
                                            color: "white",
                                            paddingLeft: 1.5,
                                            paddingRight: 1.5,
                                            alignContent: "center"
                                        }}>
                                            -{item.discount_percent}%
                                        </Typography>

                                        <Typography sx={{
                                            color: "white",
                                            fontSize: { md: 30, sm: 25, xs: 15 },
                                            fontFamily: "barlow-regular"
                                        }}>
                                            {item.final_price} $
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            ) : (
                <Skeleton variant="rectangular" sx={{
                    width: "100%",
                    height: { sm: '350px', md: '500px' },
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 89%)",
                    bgcolor: "#323232"
                }} animation='wave' />
            )}
        </Box>
    )
}

export default TopBanner;