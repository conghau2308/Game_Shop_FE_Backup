import { SettingsOutlined } from "@mui/icons-material";
import { Avatar, Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";


function UserPage() {
    const [userinfor, setUserinfor] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fakedata = {
            avatar: "https://gaming-cdn.com/themes/igv2/images/avatar2.svg",
            name: "gamer-2969060",
            member_since: "Feb 7, 2025"
        }

        setUserinfor(fakedata);
    }, []);

    const getValue = (path) => {
        if (path.includes('my-orders')) return 0;
        if (path.includes('reviews')) return 1;
        if (path.includes('settings')) return 3;

        return 0;
    }

    const tabValue = getValue(location.pathname);

    return (
        <Box sx={{
            bgcolor: "#272727",
            margin: "-8px",
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />

            <Box sx={{
                width: '100%',
                justifyItems: 'center',
                paddingTop: {xs: 5, sm: 10}
            }}>
                <Avatar
                    src={userinfor.avatar}
                    sx={{
                        height: {xs: 90, sm: 120},
                        width: {xs: 90, sm: 120}
                    }}
                />

                <Typography sx={{
                    color: '#fff',
                    fontFamily: 'barlow-regular',
                    fontSize: {xs: 23, sm: 30},
                    paddingTop: 1
                }}>
                    {userinfor.name}
                </Typography>

                <Typography sx={{
                    color: '#999',
                    fontFamily: 'barlow',
                    fontWeight: 600,
                    fontSize: {xs: 13, sm: 15}
                }}>
                    Member since: {userinfor.member_since}
                </Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Tabs
                    value={tabValue}
                    variant="scrollable"
                    scrollButtons='auto'
                    sx={{
                        width: {xs: '95%', sm: '90%', lg: '80%'},
                        '& 	.MuiTabs-indicator': {
                            bgcolor: '#ff5400',
                            height: '3px',
                            borderRadius: 20
                        }
                    }}
                >
                    <Tab label="My orders" disableRipple sx={{
                        textTransform: 'none',
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 13, sm: 17},
                        color: tabValue === 0 ? '#ff5400 !important' : '#fff',
                        borderBottom: '1px solid #999',
                        ':hover': {
                            color: '#ff5400'
                        },
                        paddingBottom: 0
                    }}
                        onClick={() => navigate("/user/my-orders")}
                    />
                    <Tab label="Reviews" disableRipple sx={{
                        textTransform: 'none',
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 13, sm: 17},
                        color: tabValue === 1 ? "#ff5400 !important" : '#fff',
                        borderBottom: '1px solid #999',
                        ':hover': {
                            color: '#ff5400'
                        },
                        paddingBottom: 0
                    }}
                        onClick={() => navigate("/user/my-reviews")}
                    />

                    <Box sx={{ flexGrow: 1, borderBottom: '1px solid #999' }} />

                    <Tab label="Settings" disableRipple icon={<SettingsOutlined sx={{
                        color: '#ff5400',
                        fontSize: {xs: 20, sm: 30}
                    }} />} iconPosition="start" sx={{
                        textTransform: 'none',
                        fontFamily: 'barlow-regular',
                        fontSize: {xs: 13, sm: 17},
                        color: tabValue === 3 ? '#ff5400 !important' : '#fff',
                        borderBottom: '1px solid #999',
                        ':hover': {
                            color: '#ff5400'
                        },
                        paddingBottom: 0
                    }}
                        onClick={() => navigate("/user/settings")}
                    />
                </Tabs>
            </Box>

            <Box sx={{
                justifyItems: 'center',
                flexGrow: 1
            }}>
                <Box sx={{
                    width: {xs: '95%', sm: '90%', lg: "80%"},
                    marginTop: 3
                }}>
                    <Outlet />
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}

export default UserPage;