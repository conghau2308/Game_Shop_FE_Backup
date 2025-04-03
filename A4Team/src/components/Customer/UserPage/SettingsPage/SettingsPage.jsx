import { AccountCircleOutlined, LockOutlined, NavigateNext } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


function SettingsPage() {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    const [hovered, setHovered] = useState(false);
    const location = useLocation();

    const getValue = (path) => {
        if(path.includes("user-profile-settings-avatar")) return 0;
        if (path.includes("user-profile-settings-security")) return 1;

        return 0;
    }

    const tabValue = getValue(location.pathname);

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            marginTop: {xs: 3, md: 5}
        }}>
            <Box sx={{
                width: {xs: '100%', sm: '30%'},
                borderRight: {xs: 'none', sm: '1px solid rgba(199, 199, 199, 0.26)'},
                display: {xs: 'flex', sm: 'block'},
                justifyContent: {xs: 'space-between', sm: 'normal'},
                marginBottom: {xs: 5, sm: 0}
            }}>
                <Box
                    onClick={() => navigate("user-profile-settings-avatar")}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: {xs: 0, sm: 3},
                        minWidth: {xs: '45%', sm: 'none'},
                        border: {xs: '1px solid #999', sm: 'none'},
                        borderRadius: {xs: "5px", sm: 'none'},
                        padding: {xs: 0.5, sm: 0},
                        cursor: 'pointer'
                    }}
                >
                    <AccountCircleOutlined sx={{
                        color: '#ff5400'
                    }} />

                    <Box sx={{
                        width: {xs: '100%', sm: '80%'},
                        marginLeft: 1
                    }}>
                        <Typography sx={{
                            color: hover || tabValue === 0 ? "#ff5400" : '#fff',
                            fontFamily: 'barlow-regular',
                            fontSize: {xs: 13, sm: 15, md: 17}
                        }}>
                            Customize your profile
                        </Typography>

                        <Typography sx={{
                            color: '#999',
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: {sm: 13, md: 15},
                            display: {xs: 'none', sm: 'block'}
                        }}>
                            Avatar, nickname and manage my personal information
                        </Typography>
                    </Box>

                    <NavigateNext sx={{
                        color: '#fff',
                        fontSize: 30,
                        display: {xs: 'none', sm: 'block'}
                    }} />
                </Box>

                <Box
                    onClick={() => navigate("user-profile-settings-security")}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: {xs: '45%', sm: 'none'},
                        border: {xs: '1px solid #999', sm: 'none'},
                        borderRadius: {xs: "5px", sm: 'none'},
                        padding: {xs: 0.5, sm: 0},
                        cursor: 'pointer'
                    }}
                >
                    <LockOutlined sx={{
                        color: '#ff5400'
                    }} />

                    <Box sx={{
                        width: {xs: '100%', sm: '80%'},
                        marginLeft: 1
                    }}>
                        <Typography sx={{
                            color: hovered || tabValue === 1 ? "#ff5400" : '#fff',
                            fontFamily: 'barlow-regular',
                            fontSize: {xs: 13, sm: 15, md: 17}
                        }}>
                            Email and password
                        </Typography>

                        <Typography sx={{
                            color: '#999',
                            fontFamily: 'barlow',
                            fontWeight: 600,
                            fontSize: {sm: 13, md: 17},
                            display: {xs: 'none', sm: 'block'}
                        }}>
                            Manage your email and password
                        </Typography>
                    </Box>

                    <NavigateNext sx={{
                        color: '#fff',
                        fontSize: 30,
                        display: {xs: 'none', sm: 'block'}
                    }}/>
                </Box>
            </Box>

            <Box sx={{
                width: {xs: '100%', sm: '70%'},
                marginBottom: 8
            }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default SettingsPage;