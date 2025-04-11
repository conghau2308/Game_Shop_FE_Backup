import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    Box,
    InputBase,
    Badge,
    useMediaQuery,
    Avatar,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Search as SearchIcon,
    ShoppingCart as ShoppingCartIcon,
    AccountCircle as AccountCircleIcon,
    AccountCircleOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HideOnScroll from "../components/Customer/CartPage/ProductCart/HideOnScroll";
import { useAuthStore } from "../hooks/User";
const Header = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const isTablet = useMediaQuery("(max-width:900px)");

    const [avatar, setAvatar] = useState("https://gaming-cdn.com/themes/igv2/images/avatar2.svg");

    const { profile, isLogin } = useAuthStore();

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
                    {/* <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#FF6F00" }}
                    >
                        INSTANT GAMING
                    </Typography> */}

                    <Box
                        component="img"
                        src="https://www.instant-gaming.com/themes/igv2/images/logos/logo-horizontal.svg"
                        sx={{
                            maxWidth: { xs: '100px', sm: '150px' },
                            height: 'auto',
                            objectFit: 'cover',
                            cursor: 'pointer',
                            width: 'auto'
                        }}
                        onClick={() => navigate("/homepage")}
                    />
                </Box>

                {/* Navbar Links */}
                <Box sx={{ display: { xs: 'none', md: "flex" }, justifyContent: "space-between" }}>
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
                            width: { xs: '100px', sm: "200px" },
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
                    <IconButton sx={{ color: "white" }}
                        onClick={() => navigate("/cart")}
                    >
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    {/* <IconButton
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

                    <input
                        type="file"
                        accept="image/*"
                        hidden onChange={handleImageChange}
                        style={{ marginLeft: "10px" }}
                    /> */}

                    <Box>
                        {!isLogin ? (
                            <Box>
                                <IconButton onClick={() => navigate("/login")}>
                                    <AccountCircleOutlined sx={{
                                        color: "#fff",
                                        fontSize: 35,
                                        ":hover": {
                                            color: "#ff5400"
                                        }
                                    }}/>
                                </IconButton>
                            </Box>
                        ) : (
                            <Box>
                                <Avatar
                                    src={profile?.data?.avatar}
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        cursor: 'pointer',
                                        ':hover': {
                                            boxShadow: "0 0 0 2px #ff5400"
                                        },
                                        boxShadow: open ? "0 0 0 2px #ff5400" : "none"
                                    }}
                                    onClick={handleClick}
                                />

                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    disableScrollLock
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                mt: 2,
                                                width: '150px',
                                                height: '150px',
                                                background: "radial-gradient(circle at center, rgba(65, 65, 65, 0.56) 0%, rgba(49, 49, 49, 0.38) 50%, rgba(0, 0, 0, 0.66) 100%)",
                                                display: 'flex',
                                                borderRadius: '10px',
                                                alignItems: 'center'
                                            }
                                        }
                                    }}
                                >
                                    <MenuItem
                                        onClick={() => navigate("/user/my-orders")}
                                    >
                                        <Typography sx={{
                                            color: '#fff',
                                            fontFamily: 'barlow-regular',
                                            fontSize: { xs: 14, sm: 16 },
                                            ':hover': {
                                                bgcolor: "#ff5400"
                                            },
                                            padding: 0.5,
                                            borderRadius: '10px'
                                        }}>My orders
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => navigate("/user/settings")}
                                    >
                                        <Typography sx={{
                                            color: '#fff',
                                            fontFamily: 'barlow-regular',
                                            fontSize: { xs: 14, sm: 16 },
                                            ':hover': {
                                                bgcolor: "#ff5400"
                                            },
                                            padding: 0.5,
                                            borderRadius: '10px'
                                        }}>Settings
                                        </Typography>
                                    </MenuItem>

                                    <MenuItem>
                                        <Typography sx={{
                                            color: '#fff',
                                            fontFamily: 'barlow-regular',
                                            fontSize: { xs: 14, sm: 16 },
                                            ':hover': {
                                                bgcolor: "#ff5400"
                                            },
                                            padding: 0.5,
                                            borderRadius: '10px'
                                        }}>Sign out
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Toolbar>

            {isTablet && (
                <HideOnScroll>
                    <Toolbar sx={{
                        justifyContent: 'center'
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: { xs: '100%', sm: '80%' } }}>
                            <Button sx={{ color: "white" }}>PC</Button>
                            <Button sx={{ color: "white" }}>PlayStation</Button>
                            <Button sx={{ color: "white" }}>Xbox</Button>
                            <Button sx={{ color: "white" }}>Nintendo</Button>
                        </Box>
                    </Toolbar>
                </HideOnScroll>
            )}
        </AppBar>
    );
};

export default Header;