import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreAlert } from "../../../../../hooks/alert";
import { checkPaymentStatus } from "../../../../../api/paymentService";
import { Backdrop, CircularProgress } from "@mui/material";


function CheckPayment() {
    const navigate = useNavigate();
    const { callAlert, callErrorAlert } = useStoreAlert();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        // console.log("params: ", params);

        const paymentParams = {
            vnp_Amount: params.get('vnp_Amount'),
            vnp_TransactionNo: params.get('vnp_TransactionNo'),
            vnp_TransactionStatus: params.get('vnp_TransactionStatus')
        };

        // console.log("VNP Transaction: ", paymentParams.vnp_TransactionStatus);

        const handleCheckPayment = async () => {
            try {
                const res = await checkPaymentStatus(paymentParams);
                if (res === "ordersuccess") {
                    navigate("/game-activation");
                    callAlert("We are pleased to inform you that your order has been successfully paid.")
                }
                else {
                    navigate("/payment-failed");
                    callErrorAlert("We regret to inform you that your payment was unsuccessful. Please try again.")
                }
            }
            catch (error) {
                console.log("Error: ", error);
                callErrorAlert("Some things went wrong. Please try again later.");
                navigate("/homepage");
            }
        };

        handleCheckPayment();
    }, [navigate]);

    return (
        <Backdrop
            open={true}
            sx={{
                bgcolor: '#fff'
            }}
        >
            <CircularProgress />
        </Backdrop>
    )
}

export default CheckPayment;