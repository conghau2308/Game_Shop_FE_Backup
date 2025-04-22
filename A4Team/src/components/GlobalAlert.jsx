import { Alert, Snackbar } from "@mui/material";
import { useStoreAlert } from "../hooks/alert"


const GlobalAlert = () => {
    const { open, message, severity, closeAlert } = useStoreAlert();

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={closeAlert}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
        >
            <Alert severity={severity} onClose={closeAlert} sx={{ width: '100%', fontFamily: 'barlow-regular'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default GlobalAlert;