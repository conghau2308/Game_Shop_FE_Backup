import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#141414",
                color: "white",
                padding: "30px 0",
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            {/* Trustpilot Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    flexDirection: "column", // Đảm bảo phần tử con (text) sẽ nằm dưới nhau
                }}
            >
                <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                    Trustpilot
                </Typography>

                {/* Trustpilot Stars and Rating */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Stack spacing={1}>
                        <Rating
                            name="half-rating"
                            defaultValue={4.7}
                            precision={0.5}
                            readOnly
                        />
                    </Stack>
                    {/* Move the rating text (4.7 / 745.402 reviews) to the left and new line */}
                    <Typography
                        variant="body2"
                        sx={{ textAlign: "left", marginTop: "5px" }}
                    >
                        4.7 / 745.402 reviews
                    </Typography>
                </Box>
            </Box>

            {/* Links Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    marginBottom: "20px",
                    flexWrap: "wrap",

                }}
            >
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Terms of Use
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Privacy Policy
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Affiliation Program
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Contact us
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Redeem a Gift Card
                </Link>
                <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
                    Find the latest video game news
                </Link>
            </Box>

            {/* Social Media Icons Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginBottom: "20px",
                }}
            >
                {/* Facebook */}
                <IconButton
                    sx={{
                        backgroundColor: "#1877F2", // Màu nền Facebook
                        "&:hover": {
                            backgroundColor: "#155FBC", // Màu khi hover
                        },
                        borderRadius: "50%", // Đảm bảo hình tròn
                        padding: "10px", // Padding cho icon
                    }}
                >
                    <Facebook sx={{ fontSize: 30, color: "white" }} />
                </IconButton>

                {/* Instagram */}
                <IconButton
                    sx={{
                        backgroundColor: "#d64d7f", // Màu nền Instagram
                        "&:hover": {
                            backgroundColor: "#cc2763", // Màu khi hover
                        },
                        borderRadius: "50%", // Đảm bảo hình tròn
                        padding: "10px", // Padding cho icon
                    }}
                >
                    <Instagram sx={{ fontSize: 30, color: "white" }} />
                </IconButton>

                {/* YouTube */}
                <IconButton
                    sx={{
                        backgroundColor: "#FF0000", // Màu nền YouTube
                        "&:hover": {
                            backgroundColor: "#D50000", // Màu khi hover
                        },
                        borderRadius: "50%", // Đảm bảo hình tròn
                        padding: "10px", // Padding cho icon
                    }}
                >
                    <YouTube sx={{ fontSize: 30, color: "white" }} />
                </IconButton>

                {/* Twitter */}
                <IconButton
                    sx={{
                        backgroundColor: "#1DA1F2", // Màu nền Twitter
                        "&:hover": {
                            backgroundColor: "#1A91DA", // Màu khi hover
                        },
                        borderRadius: "50%", // Đảm bảo hình tròn
                        padding: "10px", // Padding cho icon
                    }}
                >
                    <Twitter sx={{ fontSize: 30, color: "white" }} />
                </IconButton>
            </Box>

            {/* Copyright and Language/Location */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderTop: "2px solid #70696c", // Thêm border-top cho Box ngoài cùng
                    flexWrap: "wrap", // Cho phép các phần tử trong Box tự động xuống dòng khi cần
                    padding: "10px",
                }}
            >
                {/* Copyright Section */}
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        alignItems: "center",
                        flex: "1 1 100%", // Làm cho phần này chiếm hết chiều rộng có sẵn
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                        Copyright © 2025 Instant Gaming - All rights reserved
                    </Typography>
                </Box>

                {/* Language/Location Section */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                        marginTop: "30px",
                        justifyContent: "center",
                        flex: "1 1 100%", // Làm cho phần này chiếm hết chiều rộng có sẵn

                    }}
                >
                    <Typography variant="body2">Vietnam</Typography>
                    <Typography variant="body2">English</Typography>
                    <Typography variant="body2">EUR</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;