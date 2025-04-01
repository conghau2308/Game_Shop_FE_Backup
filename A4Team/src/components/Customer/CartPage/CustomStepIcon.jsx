import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';

const CustomStepIcon = ({ active, completed, icon }) => {
  return (
    <Box
      sx={{
        width: {xs: 20, sm: 32},
        height: {xs: 20, sm: 32},
        borderRadius: '50%',
        border: completed ? 'none' : `3px solid ${active ? '#ff5400' : '#999'}`,
        backgroundColor: completed ? '#ff5400' : 'transparent',
        color: completed || active ? '#fff' : '#999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: {xs: 12, sm: 16},
        transition: 'all 0.3s ease',
        fontFamily: "barlow",
        fontWeight: 600
      }}
    >
      {completed ? <CheckIcon sx={{ fontSize: {xs: 15, sm: 20} }} /> : icon}
    </Box>
  );
};

export default CustomStepIcon;