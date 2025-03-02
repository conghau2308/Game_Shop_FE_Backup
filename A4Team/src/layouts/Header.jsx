import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Box,
    InputBase,
    Badge,
} from "@mui/material";
import {
    Search as SearchIcon,
    ShoppingCart as ShoppingCartIcon,
    AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    // Handle Image Upload in Header
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Lưu ảnh vào state
            };
            reader.readAsDataURL(file); // Đọc file ảnh dưới dạng base64
        }
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                width: "100%",
                boxSizing: "border-box",
                background: "#141414",
                padding: "10px 0",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {/* Logo */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#FF6F00" }}
                    >
                        INSTANT GAMING
                    </Typography>
                </Box>

                {/* Navbar Links */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ color: "white" }}>PC</Button>
                    <Button sx={{ color: "white" }}>PlayStation</Button>
                    <Button sx={{ color: "white" }}>Xbox</Button>
                    <Button sx={{ color: "white" }}>Nintendo</Button>
                </Box>

                {/* Search Box */}
                <Box
                    sx={{ position: "relative", display: "flex", alignItems: "center" }}
                >
                    <InputBase
                        sx={{
                            color: "white",
                            backgroundColor: "#2C2C2C",
                            borderRadius: "20px",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            width: {sm: "200px", xs: "150px"},
                            marginLeft: "30px",
                        }}
                        placeholder="Search"
                        startAdornment={
                            <IconButton sx={{ color: "white" }}>
                                <SearchIcon />
                            </IconButton>
                        }
                    />
                </Box>

                {/* Icons and User Profile */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <IconButton sx={{ color: "white" }}>
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        sx={{ color: "white" }}
                        onClick={() => {
                            // Điều hướng đến trang profile khi nhấp vào Account icon
                            navigate("/profile");
                        }}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt="Profile"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                        ) : (
                            <AccountCircleIcon sx={{ fontSize: "40px" }} />
                        )}
                    </IconButton>
                    {/* Chọn ảnh trong Header (tùy chọn, nếu cần) */}
                    <input
                        type="file"
                        accept="image/*"
                        hidden onChange={handleImageChange}
                        style={{ marginLeft: "10px" }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;